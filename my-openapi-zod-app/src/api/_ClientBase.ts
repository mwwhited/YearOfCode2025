import { v4 as uuidv4 } from 'uuid';
import type { AccountInfo, IPublicClientApplication } from '@azure/msal-browser';
import { configManager } from '@/config/appConfig';
import { createLoginRequest } from '@/config/msalConfig';
import { correlationManager } from '@/utils/correlationManager';

export abstract class ClientBase {
    private static msalInstance: IPublicClientApplication | null = null;
    private static account: AccountInfo | null = null;

    public static initialize(msalInstance: IPublicClientApplication, account: AccountInfo | null) {
        ClientBase.msalInstance = msalInstance;
        ClientBase.account = account;
    }

    private static async getAccessToken(): Promise<string | null> {
        console.log('Checking MSAL instance and account');
        console.log('MSAL instance exists:', !!ClientBase.msalInstance);
        console.log('Account exists:', !!ClientBase.account);
        console.log('Account details:', ClientBase.account);
        
        if (!ClientBase.msalInstance || !ClientBase.account) {
            console.log('Missing MSAL instance or account, returning null');
            return null;
        }
        
        // TEMPORARY: Skip token acquisition for development to test API calls
        // This bypasses the B2C token timeout issue
        // TODO: Remove this once B2C token acquisition is fixed
        const skipTokenAcquisition = false; // Set to false to test with real tokens
        if (skipTokenAcquisition) {
            console.log('🚧 DEVELOPMENT MODE: Skipping token acquisition, returning dummy token');
            return 'development-dummy-token';
        }
        try {
            const config = configManager.getConfig();
            if (!config) {
                throw new Error('Configuration not loaded');
            }
            
            console.log('Config from configManager:', config);
            const loginRequest = createLoginRequest(config);
            console.log('Created login request:', loginRequest);
            
            console.log('Login request:', loginRequest);
            console.log('Account:', ClientBase.account);
            
            const tokenRequest = {
                ...loginRequest,
                account: ClientBase.account,
            };
            console.log('Token request:', tokenRequest);
            
            // Check what tokens are already available in cache
            console.log('Checking token cache...');
            const allAccounts = ClientBase.msalInstance.getAllAccounts();
            console.log('All cached accounts:', allAccounts);
            
            // For B2C, let's try without specific scopes first to see if we can get any token
            const noScopeRequest = {
                account: ClientBase.account,
                forceRefresh: false
            };
            console.log('Trying request without specific scopes:', noScopeRequest);
            
            let response;
            try {
                console.log('Starting token acquisition without scopes...');
                
                // Add timeout to prevent hanging (60 seconds for B2C)
                const tokenPromise = ClientBase.msalInstance.acquireTokenSilent(noScopeRequest);
                const timeoutPromise = new Promise<never>((_, reject) => 
                    setTimeout(() => reject(new Error('Token acquisition timeout after 60 seconds')), 60000)
                );
                
                console.log('Waiting for token acquisition to complete...');
                response = await Promise.race([tokenPromise, timeoutPromise]);
                console.log('MWHITED4 - No scope request success', response);
            } catch (noScopeError) {
                console.log('No scope request failed:', noScopeError);
                
                // Try with original token request but with forceRefresh: false
                const cachedTokenRequest = {
                    ...tokenRequest,
                    forceRefresh: false
                };
                console.log('Trying cached token request:', cachedTokenRequest);
                
                try {
                    console.log('Starting cached token acquisition...');
                    response = await ClientBase.msalInstance.acquireTokenSilent(cachedTokenRequest);
                    console.log('Cached token success', response);
                } catch (cachedError) {
                    console.log('Cached token failed, trying force refresh:', cachedError);
                    
                    // Last resort - force refresh
                    const forceRefreshRequest = {
                        ...tokenRequest,
                        forceRefresh: true
                    };
                    
                    response = await ClientBase.msalInstance.acquireTokenSilent(forceRefreshRequest);
                    console.log('Force refresh success', response);
                }
            }
            
            console.log('Final response:', response);
            console.log('Access token:', response.accessToken);
            
            return response.accessToken;
        } catch (error) {
            console.error('Token acquisition failed:', error);
            console.error('Error type:', typeof error);
            console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
            if (error && typeof error === 'object' && 'errorCode' in error) {
                console.error('MSAL Error code:', (error as any).errorCode);
                console.error('MSAL Error description:', (error as any).errorMessage);
            }
            
            try {
                const config = configManager.getConfig();
                if (!config) {
                    throw new Error('Configuration not loaded');
                }
                
                const loginRequest = createLoginRequest(config);
                
                await ClientBase.msalInstance.acquireTokenRedirect({
                    ...loginRequest,
                    account: ClientBase.account,
                });
                
                return null;
            } catch (redirectError) {
                console.error('Token acquisition via redirect failed:', redirectError);
                return null;
            }
        }
    }
    
    protected getBaseUrl(defaultUrl: string | undefined, baseUrl: string | undefined): string {
        const config = configManager.getConfig();
        const apiBaseUrl = config?.api?.baseUrl;
        return apiBaseUrl || baseUrl || defaultUrl || "";
    }

    protected async transformOptions(options: RequestInit): Promise<RequestInit> {
        const token = await ClientBase.getAccessToken();

        const headers: Record<string, string> = {
            ...(typeof options.headers === 'object' && !Array.isArray(options.headers) && !(options.headers instanceof Headers)
                ? options.headers as Record<string, string>
                : {})
        };

        // Add Authorization header if token is available
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        // Use account homeAccountId as session ID
        if (ClientBase.account?.homeAccountId) {
            headers["X-Session-ID"] = ClientBase.account.homeAccountId;
        }

        // X-Correlation-ID: Set per user action request chain (when user kicks off the action)
        const correlationId = correlationManager.getCorrelationId();
        if (correlationId) {
            headers["X-Correlation-ID"] = correlationId;
        }

        // X-Request-ID: Unique per API call
        headers["X-Request-ID"] = uuidv4();

        // Add user action tracking headers (same values as Button.tsx tracks)
        const userActionHeaders = correlationManager.getUserActionHeaders();
        Object.assign(headers, userActionHeaders);

        // Set content type for JSON requests if not already set
        if (!headers["Content-Type"] && options.body) {
            headers["Content-Type"] = "application/json";
        }

        options.headers = headers;
        
        return options;
    }
    
    protected throwException(message: string, status: number, response: string, headers: { [key: string]: unknown; }, result?: unknown): never {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new ApiException(message, status, response, headers, null);
    }
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: unknown; };
    result: unknown;

    constructor(message: string, status: number, response: string, headers: { [key: string]: unknown; }, result: unknown) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: unknown): obj is ApiException {
        return obj && (obj as any).isApiException && (obj as any).isApiException === true;
    }
}

import type { IFilterParameter, IOrderDirections, IResultMessage } from './GreenOnion';
interface IQuery<
    TFilter extends IFilter, 
    TOrderBy extends IOrderBy, 
    TQuery  extends ISearch<TFilter, TOrderBy>, 
    TModel> {
	Query(request:TQuery) : Promise<IPagedResult<TModel>>;
}
interface  ISave<TModel, TSave> {
	Save(request:TSave) : Promise<TModel>
}
interface  IGet<TModel> {
	Get(keys: Record<string, unknown>) : Promise<TModel>
}
interface IPagedResult<TModel> {
    rows?: TModel[],
    messages?: IResultMessage[],
    currentPage?: number,
    totalPageCount?: number,
    totalRowCount?: number,
}
interface ISearch<TFilter extends IFilter, TOrderBy extends IOrderBy> 
{
    currentPage?: number,
    pageSize?: number,
    excludePageCount?: number,
    searchTerm?: string,
    filter: TFilter,
    orderBy: TOrderBy,	
}
interface IFilter {
    [key: string]: IFilterParameter;
}
interface IOrderBy {
    [key: string]: IOrderDirections;
}
export type {
    IQuery,
    ISave,
    IGet,
    IPagedResult,
    ISearch,
    IFilter,
    IOrderBy
}
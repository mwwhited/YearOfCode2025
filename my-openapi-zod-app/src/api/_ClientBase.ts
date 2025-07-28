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
        if (!ClientBase.msalInstance || !ClientBase.account) {
            return null;
        }

        try {
            const config = configManager.getConfig();
            if (!config) {
                throw new Error('Configuration not loaded');
            }
            
            const loginRequest = createLoginRequest(config);
            
            const response = await ClientBase.msalInstance.acquireTokenSilent({
                ...loginRequest,
                account: ClientBase.account,
            });
            
            return response.accessToken;
        } catch (error) {
            console.error('Token acquisition failed:', error);
            
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
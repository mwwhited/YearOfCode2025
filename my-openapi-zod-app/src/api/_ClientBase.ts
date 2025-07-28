//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//


import GlobalState from './_GlobalState';
 
import { v4 as uuidv4 } from 'uuid';

export abstract class ClientBase {
    
    protected getBaseUrl(defaultUrl: string | undefined, baseUrl: string | undefined): string {
        return GlobalState.getApiUrl() || baseUrl || defaultUrl || "";
    }

    protected async transformOptions(options: RequestInit): Promise<RequestInit> {
        const token =  GlobalState.getJwtToken();

        const headers: Record<string, string> = {
            ...(typeof options.headers === 'object' && !Array.isArray(options.headers) && !(options.headers instanceof Headers)
                ? options.headers as Record<string, string>
                : {})
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const sessionId = GlobalState.getSessionId();
        if (sessionId){
            headers["X-Session-ID"] = sessionId;
        }

        const correlationId = GlobalState.getCorrelationId();
        if (correlationId){
            headers["X-Correlation-ID"] = correlationId;
        }

        const eventType = GlobalState.getEventType();
        if (eventType){
            headers["X-Event-Type"] = eventType;
        }

        headers["X-Request-ID"] = uuidv4();

        options.headers = headers;
        
        return options;
    }
    
    protected throwException(message: string, status: number, response: string, headers: { [key: string]: unknown; }, result?: unknown): unknown {
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
        return obj.isApiException === true;
    }
}
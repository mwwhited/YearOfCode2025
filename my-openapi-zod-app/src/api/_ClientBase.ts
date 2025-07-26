//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import GlobalState from './GlobalState';
import { v4 as uuidv4 } from 'uuid';

export abstract class ClientBase {
    
    protected getBaseUrl(defaultUrl: string | undefined, baseUrl: string | undefined): string {
        return GlobalState.getApiUrl() || baseUrl || defaultUrl || "";
    }

    protected async transformOptions(options: RequestInit): Promise<RequestInit> {
        const token =  GlobalState.getJwtToken();
        if (token) {
            options.headers = {
                ...options.headers,
                "Authorization": `Bearer ${token}`
            };
        } 
        const sessionId = GlobalState.getSessionId();
        if (sessionId){
            options.headers["X-Session-ID"]=sessionId;  
        }
        const correlationId = GlobalState.getCorrelationId();
        if (correlationId){
            options.headers["X-Correlation-ID"]=correlationId;  
        }
        const eventType = GlobalState.getEventType();
        if (eventType){
            options.headers["X-Event-Type"]=eventType;  
        }

        options.headers["X-Request-ID"]= uuidv4();  
        return options;
    }
}

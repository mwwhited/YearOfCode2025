//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryUserActionLogModelFilter } from "./IQueryUserActionLogModelFilter";
import { ZQueryUserActionLogModelFilter } from "../Schema/ZQueryUserActionLogModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryUserActionLogModelFilter implements IQueryUserActionLogModelFilter {
    readonly $zod: typeof ZQueryUserActionLogModelFilter = ZQueryUserActionLogModelFilter;
    
    userActionLogId?: IFilterParameter | undefined;
    eventType?: IFilterParameter | undefined;
    httpMethod?: IFilterParameter | undefined;
    eventDate?: IFilterParameter | undefined;
    sessionId?: IFilterParameter | undefined;
    requestId?: IFilterParameter | undefined;
    correlationId?: IFilterParameter | undefined;
    requestPath?: IFilterParameter | undefined;
    userId?: IFilterParameter | undefined;
    user?: IFilterParameter | undefined;

    constructor(data?: IQueryUserActionLogModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryUserActionLogModelFilter>) {
        if (_data) {
            (<any>this).userActionLogId = _data["userActionLogId"];
            (<any>this).eventType = _data["eventType"];
            (<any>this).httpMethod = _data["httpMethod"];
            (<any>this).eventDate = _data["eventDate"];
            (<any>this).sessionId = _data["sessionId"];
            (<any>this).requestId = _data["requestId"];
            (<any>this).correlationId = _data["correlationId"];
            (<any>this).requestPath = _data["requestPath"];
            (<any>this).userId = _data["userId"];
            (<any>this).user = _data["user"];
        }
    } 
    
    static fromJS(data: Partial<IQueryUserActionLogModelFilter>): IQueryUserActionLogModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryUserActionLogModelFilter();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["userActionLogId"] = this.userActionLogId;
        data["eventType"] = this.eventType;
        data["httpMethod"] = this.httpMethod;
        data["eventDate"] = this.eventDate;
        data["sessionId"] = this.sessionId;
        data["requestId"] = this.requestId;
        data["correlationId"] = this.correlationId;
        data["requestPath"] = this.requestPath;
        data["userId"] = this.userId;
        data["user"] = this.user;
        return data;
    }
}

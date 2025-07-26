//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryUserActionLogModel } from "./IQueryUserActionLogModel";
import { ZQueryUserActionLogModel } from "../Schema/ZQueryUserActionLogModel";

type integer = number;

export class QueryUserActionLogModel implements IQueryUserActionLogModel {
    readonly $zod: typeof ZQueryUserActionLogModel = ZQueryUserActionLogModel;
    
    userActionLogId?: integer | undefined;
    eventType?: string | undefined;
    httpMethod?: string | undefined;
    eventDate?: string | undefined;
    sessionId?: string | undefined;
    requestId?: string | undefined;
    correlationId?: string | undefined;
    requestPath?: string | undefined;
    userId?: integer | undefined;
    user?: string | undefined;

    constructor(data?: IQueryUserActionLogModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryUserActionLogModel>) {
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
    
    static fromJS(data: Partial<IQueryUserActionLogModel>): IQueryUserActionLogModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryUserActionLogModel();
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

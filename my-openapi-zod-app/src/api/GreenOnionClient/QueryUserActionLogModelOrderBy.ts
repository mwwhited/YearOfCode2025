//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryUserActionLogModelOrderBy } from "./IQueryUserActionLogModelOrderBy";
import { ZQueryUserActionLogModelOrderBy } from "./ZQueryUserActionLogModelOrderBy";
import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryUserActionLogModelOrderBy implements IQueryUserActionLogModelOrderBy {
    readonly $schema: typeof ZQueryUserActionLogModelOrderBy = ZQueryUserActionLogModelOrderBy;
    
    userActionLogId?: IOrderDirections | undefined;
    eventType?: IOrderDirections | undefined;
    httpMethod?: IOrderDirections | undefined;
    eventDate?: IOrderDirections | undefined;
    sessionId?: IOrderDirections | undefined;
    requestId?: IOrderDirections | undefined;
    correlationId?: IOrderDirections | undefined;
    requestPath?: IOrderDirections | undefined;
    userId?: IOrderDirections | undefined;
    user?: IOrderDirections | undefined;

    constructor(data?: IQueryUserActionLogModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryUserActionLogModelOrderBy>) {
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
    
    static fromJS(data: Partial<IQueryUserActionLogModelOrderBy>): IQueryUserActionLogModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryUserActionLogModelOrderBy();
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

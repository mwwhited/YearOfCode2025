//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryErrorLogModelOrderBy } from "./IQueryErrorLogModelOrderBy";
import { ZQueryErrorLogModelOrderBy } from "../Schema/ZQueryErrorLogModelOrderBy";
import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryErrorLogModelOrderBy implements IQueryErrorLogModelOrderBy {
    readonly $zod: typeof ZQueryErrorLogModelOrderBy = ZQueryErrorLogModelOrderBy;
    
    errorLogId?: IOrderDirections | undefined;
    errorMessage?: IOrderDirections | undefined;
    errorPath?: IOrderDirections | undefined;

    constructor(data?: IQueryErrorLogModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryErrorLogModelOrderBy>) {
        if (_data) {
            (<any>this).errorLogId = _data["errorLogId"];
            (<any>this).errorMessage = _data["errorMessage"];
            (<any>this).errorPath = _data["errorPath"];
        }
    } 
    
    static fromJS(data: Partial<IQueryErrorLogModelOrderBy>): IQueryErrorLogModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryErrorLogModelOrderBy();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["errorLogId"] = this.errorLogId;
        data["errorMessage"] = this.errorMessage;
        data["errorPath"] = this.errorPath;
        return data;
    }
}

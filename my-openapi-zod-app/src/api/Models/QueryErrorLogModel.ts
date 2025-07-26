//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryErrorLogModel } from "./IQueryErrorLogModel";
import { ZQueryErrorLogModel } from "../Schema/ZQueryErrorLogModel";

type integer = number;

export class QueryErrorLogModel implements IQueryErrorLogModel {
    readonly $zod: typeof ZQueryErrorLogModel = ZQueryErrorLogModel;
    
    errorLogId?: integer | undefined;
    errorMessage?: string | undefined;
    errorPath?: string | undefined;

    constructor(data?: IQueryErrorLogModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryErrorLogModel>) {
        if (_data) {
            (<any>this).errorLogId = _data["errorLogId"];
            (<any>this).errorMessage = _data["errorMessage"];
            (<any>this).errorPath = _data["errorPath"];
        }
    } 
    
    static fromJS(data: Partial<IQueryErrorLogModel>): IQueryErrorLogModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryErrorLogModel();
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

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryErrorLogModelFilter } from "./IQueryErrorLogModelFilter";
import { ZQueryErrorLogModelFilter } from "../Schema/ZQueryErrorLogModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryErrorLogModelFilter implements IQueryErrorLogModelFilter {
    readonly $zod: typeof ZQueryErrorLogModelFilter = ZQueryErrorLogModelFilter;
    
    errorLogId?: IFilterParameter | undefined;
    errorMessage?: IFilterParameter | undefined;
    errorPath?: IFilterParameter | undefined;

    constructor(data?: IQueryErrorLogModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryErrorLogModelFilter>) {
        if (_data) {
            (<any>this).errorLogId = _data["errorLogId"];
            (<any>this).errorMessage = _data["errorMessage"];
            (<any>this).errorPath = _data["errorPath"];
        }
    } 
    
    static fromJS(data: Partial<IQueryErrorLogModelFilter>): IQueryErrorLogModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryErrorLogModelFilter();
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

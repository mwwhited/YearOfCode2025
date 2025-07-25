//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryStorageTypeModelFilter } from "./IQueryStorageTypeModelFilter";
import { ZQueryStorageTypeModelFilter } from "../Schema/ZQueryStorageTypeModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryStorageTypeModelFilter implements IQueryStorageTypeModelFilter {
    readonly $zod: typeof ZQueryStorageTypeModelFilter = ZQueryStorageTypeModelFilter;
    
    storageTypeId?: IFilterParameter | undefined;
    storageTypeName?: IFilterParameter | undefined;

    constructor(data?: IQueryStorageTypeModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryStorageTypeModelFilter>) {
        if (_data) {
            (<any>this).storageTypeId = _data["storageTypeId"];
            (<any>this).storageTypeName = _data["storageTypeName"];
        }
    } 
    
    static fromJS(data: Partial<IQueryStorageTypeModelFilter>): IQueryStorageTypeModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryStorageTypeModelFilter();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["storageTypeId"] = this.storageTypeId;
        data["storageTypeName"] = this.storageTypeName;
        return data;
    }
}

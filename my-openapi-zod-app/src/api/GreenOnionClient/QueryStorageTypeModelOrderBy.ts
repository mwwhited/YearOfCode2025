//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryStorageTypeModelOrderBy } from "./IQueryStorageTypeModelOrderBy";
import { ZQueryStorageTypeModelOrderBy } from "./ZQueryStorageTypeModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryStorageTypeModelOrderBy implements IQueryStorageTypeModelOrderBy {
    readonly $schema: typeof ZQueryStorageTypeModelOrderBy = ZQueryStorageTypeModelOrderBy;
    storageTypeId?: IOrderDirections | undefined; 
    storageTypeName?: IOrderDirections | undefined; 

    constructor(data?: IQueryStorageTypeModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).storageTypeId = _data["storageTypeId:"];
            (<any>this).storageTypeName = _data["storageTypeName:"];
        }
    } 
    
    static fromJS(data: any): IQueryStorageTypeModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryStorageTypeModelOrderBy();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

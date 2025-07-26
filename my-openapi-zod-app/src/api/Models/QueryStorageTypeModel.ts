//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryStorageTypeModel } from "./IQueryStorageTypeModel";
import { ZQueryStorageTypeModel } from "../Schema/ZQueryStorageTypeModel";

type integer = number;

export class QueryStorageTypeModel implements IQueryStorageTypeModel {
    readonly $zod: typeof ZQueryStorageTypeModel = ZQueryStorageTypeModel;
    
    storageTypeId?: integer | undefined;
    storageTypeName?: string | undefined;

    constructor(data?: IQueryStorageTypeModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryStorageTypeModel>) {
        if (_data) {
            (<any>this).storageTypeId = _data["storageTypeId"];
            (<any>this).storageTypeName = _data["storageTypeName"];
        }
    } 
    
    static fromJS(data: Partial<IQueryStorageTypeModel>): IQueryStorageTypeModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryStorageTypeModel();
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

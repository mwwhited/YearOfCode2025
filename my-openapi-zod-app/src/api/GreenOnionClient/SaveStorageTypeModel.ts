//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveStorageTypeModel } from "./ISaveStorageTypeModel";
import { ZSaveStorageTypeModel } from "./ZSaveStorageTypeModel";


type integer = number;

export class SaveStorageTypeModel implements ISaveStorageTypeModel {
    readonly $schema: typeof ZSaveStorageTypeModel = ZSaveStorageTypeModel;
    storageTypeId?: integer | undefined; 
    storageTypeName?: string | undefined; 

    constructor(data?: ISaveStorageTypeModel) {
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
    
    static fromJS(data: any): ISaveStorageTypeModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveStorageTypeModel();
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

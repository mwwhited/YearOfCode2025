//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IDataMigrationThroughApiResponseModel } from "./IDataMigrationThroughApiResponseModel";
import { ZDataMigrationThroughApiResponseModel } from "../Schema/ZDataMigrationThroughApiResponseModel";

type integer = number;

export class DataMigrationThroughApiResponseModel implements IDataMigrationThroughApiResponseModel {
    readonly $zod: typeof ZDataMigrationThroughApiResponseModel = ZDataMigrationThroughApiResponseModel;
    
    success?: boolean | undefined;
    message?: string | undefined;
    totalRecords?: integer | undefined;
    payload?: unknown | undefined;
    isUpdate?: boolean | undefined;
    isAdded?: boolean | undefined;
    isDelete?: boolean | undefined;

    constructor(data?: IDataMigrationThroughApiResponseModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IDataMigrationThroughApiResponseModel>) {
        if (_data) {
            (<any>this).success = _data["success"];
            (<any>this).message = _data["message"];
            (<any>this).totalRecords = _data["totalRecords"];
            (<any>this).payload = _data["payload"];
            (<any>this).isUpdate = _data["isUpdate"];
            (<any>this).isAdded = _data["isAdded"];
            (<any>this).isDelete = _data["isDelete"];
        }
    } 
    
    static fromJS(data: Partial<IDataMigrationThroughApiResponseModel>): IDataMigrationThroughApiResponseModel {
        data = typeof data === 'object' ? data : {};
        const result = new DataMigrationThroughApiResponseModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["success"] = this.success;
        data["message"] = this.message;
        data["totalRecords"] = this.totalRecords;
        data["payload"] = this.payload;
        data["isUpdate"] = this.isUpdate;
        data["isAdded"] = this.isAdded;
        data["isDelete"] = this.isDelete;
        return data;
    }
}

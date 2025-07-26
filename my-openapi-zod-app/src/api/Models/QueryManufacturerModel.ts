//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryManufacturerModel } from "./IQueryManufacturerModel";
import { ZQueryManufacturerModel } from "../Schema/ZQueryManufacturerModel";

type integer = number;

export class QueryManufacturerModel implements IQueryManufacturerModel {
    readonly $zod: typeof ZQueryManufacturerModel = ZQueryManufacturerModel;
    
    manufacturerId?: integer | undefined;
    manufacturerName?: string | undefined;
    glnNumber?: string | undefined;
    isActive?: boolean | undefined;
    hasUsers?: boolean | undefined;
    userCount?: integer | undefined;
    hasActiveUsers?: boolean | undefined;
    activeUserCount?: integer | undefined;
    productCount?: integer | undefined;
    hasOneWorldSync?: boolean | undefined;
    oneWorldSyncCount?: integer | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    constructor(data?: IQueryManufacturerModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryManufacturerModel>) {
        if (_data) {
            (<any>this).manufacturerId = _data["manufacturerId"];
            (<any>this).manufacturerName = _data["manufacturerName"];
            (<any>this).glnNumber = _data["glnNumber"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).hasUsers = _data["hasUsers"];
            (<any>this).userCount = _data["userCount"];
            (<any>this).hasActiveUsers = _data["hasActiveUsers"];
            (<any>this).activeUserCount = _data["activeUserCount"];
            (<any>this).productCount = _data["productCount"];
            (<any>this).hasOneWorldSync = _data["hasOneWorldSync"];
            (<any>this).oneWorldSyncCount = _data["oneWorldSyncCount"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryManufacturerModel>): IQueryManufacturerModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryManufacturerModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["manufacturerId"] = this.manufacturerId;
        data["manufacturerName"] = this.manufacturerName;
        data["glnNumber"] = this.glnNumber;
        data["isActive"] = this.isActive;
        data["hasUsers"] = this.hasUsers;
        data["userCount"] = this.userCount;
        data["hasActiveUsers"] = this.hasActiveUsers;
        data["activeUserCount"] = this.activeUserCount;
        data["productCount"] = this.productCount;
        data["hasOneWorldSync"] = this.hasOneWorldSync;
        data["oneWorldSyncCount"] = this.oneWorldSyncCount;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }
}

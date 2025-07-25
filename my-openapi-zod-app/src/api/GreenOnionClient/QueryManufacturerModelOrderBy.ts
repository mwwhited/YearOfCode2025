//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryManufacturerModelOrderBy } from "./IQueryManufacturerModelOrderBy";
import { ZQueryManufacturerModelOrderBy } from "./ZQueryManufacturerModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryManufacturerModelOrderBy implements IQueryManufacturerModelOrderBy {
    readonly $schema: typeof ZQueryManufacturerModelOrderBy = ZQueryManufacturerModelOrderBy;
    manufacturerId?: IOrderDirections | undefined; 
    manufacturerName?: IOrderDirections | undefined; 
    glnNumber?: IOrderDirections | undefined; 
    isActive?: IOrderDirections | undefined; 
    hasUsers?: IOrderDirections | undefined; 
    userCount?: IOrderDirections | undefined; 
    hasActiveUsers?: IOrderDirections | undefined; 
    activeUserCount?: IOrderDirections | undefined; 
    productCount?: IOrderDirections | undefined; 
    hasOneWorldSync?: IOrderDirections | undefined; 
    oneWorldSyncCount?: IOrderDirections | undefined; 
    createdOn?: IOrderDirections | undefined; 
    createdById?: IOrderDirections | undefined; 
    createdBy?: IOrderDirections | undefined; 
    updatedOn?: IOrderDirections | undefined; 
    updatedById?: IOrderDirections | undefined; 
    updatedBy?: IOrderDirections | undefined; 

    constructor(data?: IQueryManufacturerModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).manufacturerId = _data["manufacturerId:"];
            (<any>this).manufacturerName = _data["manufacturerName:"];
            (<any>this).glnNumber = _data["glnNumber:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).hasUsers = _data["hasUsers:"];
            (<any>this).userCount = _data["userCount:"];
            (<any>this).hasActiveUsers = _data["hasActiveUsers:"];
            (<any>this).activeUserCount = _data["activeUserCount:"];
            (<any>this).productCount = _data["productCount:"];
            (<any>this).hasOneWorldSync = _data["hasOneWorldSync:"];
            (<any>this).oneWorldSyncCount = _data["oneWorldSyncCount:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).createdById = _data["createdById:"];
            (<any>this).createdBy = _data["createdBy:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryManufacturerModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryManufacturerModelOrderBy();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

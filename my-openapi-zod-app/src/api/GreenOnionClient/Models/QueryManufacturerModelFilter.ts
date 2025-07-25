//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryManufacturerModelFilter } from "./IQueryManufacturerModelFilter";
import { ZQueryManufacturerModelFilter } from "../Schema/ZQueryManufacturerModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryManufacturerModelFilter implements IQueryManufacturerModelFilter {
    readonly $zod: typeof ZQueryManufacturerModelFilter = ZQueryManufacturerModelFilter;
    
    manufacturerId?: IFilterParameter | undefined;
    manufacturerName?: IFilterParameter | undefined;
    glnNumber?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    hasUsers?: IFilterParameter | undefined;
    userCount?: IFilterParameter | undefined;
    hasActiveUsers?: IFilterParameter | undefined;
    activeUserCount?: IFilterParameter | undefined;
    productCount?: IFilterParameter | undefined;
    hasOneWorldSync?: IFilterParameter | undefined;
    oneWorldSyncCount?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    constructor(data?: IQueryManufacturerModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryManufacturerModelFilter>) {
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
    
    static fromJS(data: Partial<IQueryManufacturerModelFilter>): IQueryManufacturerModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryManufacturerModelFilter();
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

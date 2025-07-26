//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryDistributorModelFilter } from "./IQueryDistributorModelFilter";
import { ZQueryDistributorModelFilter } from "../Schema/ZQueryDistributorModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryDistributorModelFilter implements IQueryDistributorModelFilter {
    readonly $zod: typeof ZQueryDistributorModelFilter = ZQueryDistributorModelFilter;
    
    distributorId?: IFilterParameter | undefined;
    distributorName?: IFilterParameter | undefined;
    distributorCode?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    constructor(data?: IQueryDistributorModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryDistributorModelFilter>) {
        if (_data) {
            (<any>this).distributorId = _data["distributorId"];
            (<any>this).distributorName = _data["distributorName"];
            (<any>this).distributorCode = _data["distributorCode"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryDistributorModelFilter>): IQueryDistributorModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryDistributorModelFilter();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["distributorId"] = this.distributorId;
        data["distributorName"] = this.distributorName;
        data["distributorCode"] = this.distributorCode;
        data["isActive"] = this.isActive;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }
}

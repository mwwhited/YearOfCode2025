//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryDefinedFilterModelFilter } from "./IQueryDefinedFilterModelFilter";
import { ZQueryDefinedFilterModelFilter } from "./ZQueryDefinedFilterModelFilter";

import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryDefinedFilterModelFilter implements IQueryDefinedFilterModelFilter {
    readonly $schema: typeof ZQueryDefinedFilterModelFilter = ZQueryDefinedFilterModelFilter;
    definedFilterId?: IFilterParameter | undefined; 
    createById?: IFilterParameter | undefined; 
    updatedOn?: IFilterParameter | undefined; 
    updatedById?: IFilterParameter | undefined; 
    updatedBy?: IFilterParameter | undefined; 
    createBy?: IFilterParameter | undefined; 
    path?: IFilterParameter | undefined; 
    name?: IFilterParameter | undefined; 
    isActive?: IFilterParameter | undefined; 
    createdOn?: IFilterParameter | undefined; 
    state?: IFilterParameter | undefined; 

    constructor(data?: IQueryDefinedFilterModelFilter) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).definedFilterId = _data["definedFilterId:"];
            (<any>this).createById = _data["createById:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
            (<any>this).createBy = _data["createBy:"];
            (<any>this).path = _data["path:"];
            (<any>this).name = _data["name:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).state = _data["state:"];
        }
    } 
    
    static fromJS(data: any): IQueryDefinedFilterModelFilter {
        data = typeof data === 'object' ? data : {};
        let result = new QueryDefinedFilterModelFilter();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["definedFilterId"] = this.definedFilterId;
        data["createById"] = this.createById;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        data["createBy"] = this.createBy;
        data["path"] = this.path;
        data["name"] = this.name;
        data["isActive"] = this.isActive;
        data["createdOn"] = this.createdOn;
        data["state"] = this.state;
        return data;
    }

}

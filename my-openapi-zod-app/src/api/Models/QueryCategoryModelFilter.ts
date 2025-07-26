//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryCategoryModelFilter } from "./IQueryCategoryModelFilter";
import { ZQueryCategoryModelFilter } from "../Schema/ZQueryCategoryModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryCategoryModelFilter implements IQueryCategoryModelFilter {
    readonly $zod: typeof ZQueryCategoryModelFilter = ZQueryCategoryModelFilter;
    
    categoryId?: IFilterParameter | undefined;
    categoryName?: IFilterParameter | undefined;
    categoryCode?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    constructor(data?: IQueryCategoryModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryCategoryModelFilter>) {
        if (_data) {
            (<any>this).categoryId = _data["categoryId"];
            (<any>this).categoryName = _data["categoryName"];
            (<any>this).categoryCode = _data["categoryCode"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryCategoryModelFilter>): IQueryCategoryModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryCategoryModelFilter();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["categoryId"] = this.categoryId;
        data["categoryName"] = this.categoryName;
        data["categoryCode"] = this.categoryCode;
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

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQuerySubCategoryModelFilter } from "./IQuerySubCategoryModelFilter";
import { ZQuerySubCategoryModelFilter } from "../Schema/ZQuerySubCategoryModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QuerySubCategoryModelFilter implements IQuerySubCategoryModelFilter {
    readonly $zod: typeof ZQuerySubCategoryModelFilter = ZQuerySubCategoryModelFilter;
    
    subCategoryId?: IFilterParameter | undefined;
    categoryId?: IFilterParameter | undefined;
    subCategoryName?: IFilterParameter | undefined;
    subCategoryCode?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    constructor(data?: IQuerySubCategoryModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQuerySubCategoryModelFilter>) {
        if (_data) {
            (<any>this).subCategoryId = _data["subCategoryId"];
            (<any>this).categoryId = _data["categoryId"];
            (<any>this).subCategoryName = _data["subCategoryName"];
            (<any>this).subCategoryCode = _data["subCategoryCode"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQuerySubCategoryModelFilter>): IQuerySubCategoryModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QuerySubCategoryModelFilter();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["subCategoryId"] = this.subCategoryId;
        data["categoryId"] = this.categoryId;
        data["subCategoryName"] = this.subCategoryName;
        data["subCategoryCode"] = this.subCategoryCode;
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

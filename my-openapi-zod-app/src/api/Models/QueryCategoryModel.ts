//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryCategoryModel } from "./IQueryCategoryModel";
import { ZQueryCategoryModel } from "../Schema/ZQueryCategoryModel";

type integer = number;

export class QueryCategoryModel implements IQueryCategoryModel {
    readonly $zod: typeof ZQueryCategoryModel = ZQueryCategoryModel;
    
    categoryId?: integer | undefined;
    categoryName?: string | undefined;
    categoryCode?: string | undefined;
    isActive?: boolean | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    constructor(data?: IQueryCategoryModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryCategoryModel>) {
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
    
    static fromJS(data: Partial<IQueryCategoryModel>): IQueryCategoryModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryCategoryModel();
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

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQuerySubCategoryModel } from "./IQuerySubCategoryModel";
import { ZQuerySubCategoryModel } from "./ZQuerySubCategoryModel";

type integer = number;

export class QuerySubCategoryModel implements IQuerySubCategoryModel {
    readonly $schema: typeof ZQuerySubCategoryModel = ZQuerySubCategoryModel;
    
    subCategoryId?: integer | undefined;
    categoryId?: integer | undefined;
    subCategoryName?: string | undefined;
    subCategoryCode?: string | undefined;
    isActive?: boolean | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    constructor(data?: IQuerySubCategoryModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQuerySubCategoryModel>) {
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
    
    static fromJS(data: Partial<IQuerySubCategoryModel>): IQuerySubCategoryModel {
        data = typeof data === 'object' ? data : {};
        const result = new QuerySubCategoryModel();
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

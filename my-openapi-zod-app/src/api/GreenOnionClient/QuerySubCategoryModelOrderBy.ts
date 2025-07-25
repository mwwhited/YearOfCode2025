//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQuerySubCategoryModelOrderBy } from "./IQuerySubCategoryModelOrderBy";
import { ZQuerySubCategoryModelOrderBy } from "./ZQuerySubCategoryModelOrderBy";
import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QuerySubCategoryModelOrderBy implements IQuerySubCategoryModelOrderBy {
    readonly $zod: typeof ZQuerySubCategoryModelOrderBy = ZQuerySubCategoryModelOrderBy;
    
    subCategoryId?: IOrderDirections | undefined;
    categoryId?: IOrderDirections | undefined;
    subCategoryName?: IOrderDirections | undefined;
    subCategoryCode?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    constructor(data?: IQuerySubCategoryModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQuerySubCategoryModelOrderBy>) {
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
    
    static fromJS(data: Partial<IQuerySubCategoryModelOrderBy>): IQuerySubCategoryModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QuerySubCategoryModelOrderBy();
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

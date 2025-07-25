//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryCategoryModelOrderBy } from "./IQueryCategoryModelOrderBy";
import { ZQueryCategoryModelOrderBy } from "./ZQueryCategoryModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryCategoryModelOrderBy implements IQueryCategoryModelOrderBy {
    readonly $schema: typeof ZQueryCategoryModelOrderBy = ZQueryCategoryModelOrderBy;
    categoryId?: IOrderDirections | undefined; 
    categoryName?: IOrderDirections | undefined; 
    categoryCode?: IOrderDirections | undefined; 
    isActive?: IOrderDirections | undefined; 
    createdOn?: IOrderDirections | undefined; 
    createdById?: IOrderDirections | undefined; 
    createdBy?: IOrderDirections | undefined; 
    updatedOn?: IOrderDirections | undefined; 
    updatedById?: IOrderDirections | undefined; 
    updatedBy?: IOrderDirections | undefined; 

    constructor(data?: IQueryCategoryModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).categoryId = _data["categoryId:"];
            (<any>this).categoryName = _data["categoryName:"];
            (<any>this).categoryCode = _data["categoryCode:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).createdById = _data["createdById:"];
            (<any>this).createdBy = _data["createdBy:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryCategoryModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryCategoryModelOrderBy();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

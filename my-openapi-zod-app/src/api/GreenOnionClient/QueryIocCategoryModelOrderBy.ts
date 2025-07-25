//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryIocCategoryModelOrderBy } from "./IQueryIocCategoryModelOrderBy";
import { ZQueryIocCategoryModelOrderBy } from "./ZQueryIocCategoryModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryIocCategoryModelOrderBy implements IQueryIocCategoryModelOrderBy {
    readonly $schema: typeof ZQueryIocCategoryModelOrderBy = ZQueryIocCategoryModelOrderBy;
    iocCategoryId?: IOrderDirections | undefined; 
    name?: IOrderDirections | undefined; 
    color?: IOrderDirections | undefined; 

    constructor(data?: IQueryIocCategoryModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).iocCategoryId = _data["iocCategoryId:"];
            (<any>this).name = _data["name:"];
            (<any>this).color = _data["color:"];
        }
    } 
    
    static fromJS(data: any): IQueryIocCategoryModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryIocCategoryModelOrderBy();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["iocCategoryId"] = this.iocCategoryId;
        data["name"] = this.name;
        data["color"] = this.color;
        return data;
    }

}

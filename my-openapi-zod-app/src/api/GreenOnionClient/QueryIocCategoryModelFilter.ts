//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryIocCategoryModelFilter } from "./IQueryIocCategoryModelFilter";
import { ZQueryIocCategoryModelFilter } from "./ZQueryIocCategoryModelFilter";

import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryIocCategoryModelFilter implements IQueryIocCategoryModelFilter {
    readonly $schema: typeof ZQueryIocCategoryModelFilter = ZQueryIocCategoryModelFilter;
    iocCategoryId?: IFilterParameter | undefined; 
    name?: IFilterParameter | undefined; 
    color?: IFilterParameter | undefined; 

    constructor(data?: IQueryIocCategoryModelFilter) {
        if (data) {
            for (var property in data) {
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
    
    static fromJS(data: any): IQueryIocCategoryModelFilter {
        data = typeof data === 'object' ? data : {};
        let result = new QueryIocCategoryModelFilter();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["iocCategoryId"] = this.iocCategoryId;
        data["name"] = this.name;
        data["color"] = this.color;
        return data;
    }

}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryIngredientModelFilter } from "./IQueryIngredientModelFilter";
import { ZQueryIngredientModelFilter } from "./ZQueryIngredientModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryIngredientModelFilter implements IQueryIngredientModelFilter {
    readonly $schema: typeof ZQueryIngredientModelFilter = ZQueryIngredientModelFilter;
    
    ingredientId?: IFilterParameter | undefined;
    ingredientName?: IFilterParameter | undefined;
    group?: IFilterParameter | undefined;
    iocGroup?: IFilterParameter | undefined;

    constructor(data?: IQueryIngredientModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryIngredientModelFilter>) {
        if (_data) {
            (<any>this).ingredientId = _data["ingredientId"];
            (<any>this).ingredientName = _data["ingredientName"];
            (<any>this).group = _data["group"];
            (<any>this).iocGroup = _data["iocGroup"];
        }
    } 
    
    static fromJS(data: Partial<IQueryIngredientModelFilter>): IQueryIngredientModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryIngredientModelFilter();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["ingredientId"] = this.ingredientId;
        data["ingredientName"] = this.ingredientName;
        data["group"] = this.group;
        data["iocGroup"] = this.iocGroup;
        return data;
    }
}

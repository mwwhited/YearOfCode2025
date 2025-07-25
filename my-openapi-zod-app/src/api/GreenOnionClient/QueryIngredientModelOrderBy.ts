//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryIngredientModelOrderBy } from "./IQueryIngredientModelOrderBy";
import { ZQueryIngredientModelOrderBy } from "./ZQueryIngredientModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryIngredientModelOrderBy implements IQueryIngredientModelOrderBy {
    readonly $schema: typeof ZQueryIngredientModelOrderBy = ZQueryIngredientModelOrderBy;
    ingredientId?: IOrderDirections | undefined; 
    ingredientName?: IOrderDirections | undefined; 
    group?: IOrderDirections | undefined; 
    iocGroup?: IOrderDirections | undefined; 

    constructor(data?: IQueryIngredientModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).ingredientId = _data["ingredientId:"];
            (<any>this).ingredientName = _data["ingredientName:"];
            (<any>this).group = _data["group:"];
            (<any>this).iocGroup = _data["iocGroup:"];
        }
    } 
    
    static fromJS(data: any): IQueryIngredientModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryIngredientModelOrderBy();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

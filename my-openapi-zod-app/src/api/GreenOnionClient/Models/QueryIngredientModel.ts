//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryIngredientModel } from "./IQueryIngredientModel";
import { ZQueryIngredientModel } from "../Schema/ZQueryIngredientModel";

type integer = number;

export class QueryIngredientModel implements IQueryIngredientModel {
    readonly $zod: typeof ZQueryIngredientModel = ZQueryIngredientModel;
    
    ingredientId?: integer | undefined;
    ingredientName?: string | undefined;
    group?: string | undefined;
    iocGroup?: string | undefined;

    constructor(data?: IQueryIngredientModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryIngredientModel>) {
        if (_data) {
            (<any>this).ingredientId = _data["ingredientId"];
            (<any>this).ingredientName = _data["ingredientName"];
            (<any>this).group = _data["group"];
            (<any>this).iocGroup = _data["iocGroup"];
        }
    } 
    
    static fromJS(data: Partial<IQueryIngredientModel>): IQueryIngredientModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryIngredientModel();
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

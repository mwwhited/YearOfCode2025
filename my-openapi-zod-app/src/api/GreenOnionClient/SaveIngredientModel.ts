//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveIngredientModel } from "./ISaveIngredientModel";
import { ZSaveIngredientModel } from "./ZSaveIngredientModel";

type integer = number;

export class SaveIngredientModel implements ISaveIngredientModel {
    readonly $schema: typeof ZSaveIngredientModel = ZSaveIngredientModel;
    
    ingredientId?: integer | undefined;
    ingredientName?: string | undefined;
    group?: string | undefined;
    iocGroup?: string | undefined;

    constructor(data?: ISaveIngredientModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveIngredientModel>) {
        if (_data) {
            (<any>this).ingredientId = _data["ingredientId"];
            (<any>this).ingredientName = _data["ingredientName"];
            (<any>this).group = _data["group"];
            (<any>this).iocGroup = _data["iocGroup"];
        }
    } 
    
    static fromJS(data: Partial<ISaveIngredientModel>): ISaveIngredientModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveIngredientModel();
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

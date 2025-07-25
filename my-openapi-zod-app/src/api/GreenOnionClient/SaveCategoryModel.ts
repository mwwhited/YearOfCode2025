//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveCategoryModel } from "./ISaveCategoryModel";
import { ZSaveCategoryModel } from "./ZSaveCategoryModel";

type integer = number;

export class SaveCategoryModel implements ISaveCategoryModel {
    readonly $zod: typeof ZSaveCategoryModel = ZSaveCategoryModel;
    
    categoryId?: integer | undefined;
    categoryName?: string | undefined;
    categoryCode?: string | undefined;
    isActive?: boolean | undefined;

    constructor(data?: ISaveCategoryModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveCategoryModel>) {
        if (_data) {
            (<any>this).categoryId = _data["categoryId"];
            (<any>this).categoryName = _data["categoryName"];
            (<any>this).categoryCode = _data["categoryCode"];
            (<any>this).isActive = _data["isActive"];
        }
    } 
    
    static fromJS(data: Partial<ISaveCategoryModel>): ISaveCategoryModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveCategoryModel();
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
        return data;
    }
}

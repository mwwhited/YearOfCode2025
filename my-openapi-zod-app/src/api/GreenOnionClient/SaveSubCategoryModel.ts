//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveSubCategoryModel } from "./ISaveSubCategoryModel";
import { ZSaveSubCategoryModel } from "./ZSaveSubCategoryModel";


type integer = number;

export class SaveSubCategoryModel implements ISaveSubCategoryModel {
    readonly $schema: typeof ZSaveSubCategoryModel = ZSaveSubCategoryModel;
    subCategoryId?: integer | undefined; 
    categoryId?: integer | undefined; 
    subCategoryName?: string | undefined; 
    subCategoryCode?: string | undefined; 
    isActive?: boolean | undefined; 

    constructor(data?: ISaveSubCategoryModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).subCategoryId = _data["subCategoryId:"];
            (<any>this).categoryId = _data["categoryId:"];
            (<any>this).subCategoryName = _data["subCategoryName:"];
            (<any>this).subCategoryCode = _data["subCategoryCode:"];
            (<any>this).isActive = _data["isActive:"];
        }
    } 
    
    static fromJS(data: any): ISaveSubCategoryModel {
        data = typeof data === 'object' ? data : {};
        let result = new SaveSubCategoryModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["subCategoryId"] = this.subCategoryId;
        data["categoryId"] = this.categoryId;
        data["subCategoryName"] = this.subCategoryName;
        data["subCategoryCode"] = this.subCategoryCode;
        data["isActive"] = this.isActive;
        return data;
    }

}

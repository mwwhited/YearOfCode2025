//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { ISaveProductModel } from "./ISaveProductModel";
import { ZSaveProductModel } from "../Schema/ZSaveProductModel";
import { NutritionalInformationModel } from "./NutritionalInformationModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";

type integer = number;

export class SaveProductModel implements ISaveProductModel {
    readonly $zod: typeof ZSaveProductModel = ZSaveProductModel;
    
    productId?: integer | undefined;
    productName?: string | undefined;
    gtin?: string | undefined;
    upc?: string | undefined;
    categoryId?: integer | undefined;
    subCategoryId?: integer | undefined;
    iocCategoryId?: integer | undefined;
    ingredients?: string | undefined;
    brandName?: string | undefined;
    description?: string | undefined;
    allergenKeywords?: string | undefined;
    vendor?: string | undefined;
    manufacturerId?: integer | undefined;
    storageTypeId?: integer | undefined;
    productLabelPdfUrl?: string | undefined;
    manufacturerProductCode?: string | undefined;
    isActive?: boolean | undefined;
    nutritionalInformation?: INutritionalInformationModel | undefined;

    constructor(data?: ISaveProductModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveProductModel>) {
        if (_data) {
            (<any>this).productId = _data["productId"];
            (<any>this).productName = _data["productName"];
            (<any>this).gtin = _data["gtin"];
            (<any>this).upc = _data["upc"];
            (<any>this).categoryId = _data["categoryId"];
            (<any>this).subCategoryId = _data["subCategoryId"];
            (<any>this).iocCategoryId = _data["iocCategoryId"];
            (<any>this).ingredients = _data["ingredients"];
            (<any>this).brandName = _data["brandName"];
            (<any>this).description = _data["description"];
            (<any>this).allergenKeywords = _data["allergenKeywords"];
            (<any>this).vendor = _data["vendor"];
            (<any>this).manufacturerId = _data["manufacturerId"];
            (<any>this).storageTypeId = _data["storageTypeId"];
            (<any>this).productLabelPdfUrl = _data["productLabelPdfUrl"];
            (<any>this).manufacturerProductCode = _data["manufacturerProductCode"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).nutritionalInformation = _data["nutritionalInformation"];
        }
    } 
    
    static fromJS(data: Partial<ISaveProductModel>): ISaveProductModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveProductModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["productId"] = this.productId;
        data["productName"] = this.productName;
        data["gtin"] = this.gtin;
        data["upc"] = this.upc;
        data["categoryId"] = this.categoryId;
        data["subCategoryId"] = this.subCategoryId;
        data["iocCategoryId"] = this.iocCategoryId;
        data["ingredients"] = this.ingredients;
        data["brandName"] = this.brandName;
        data["description"] = this.description;
        data["allergenKeywords"] = this.allergenKeywords;
        data["vendor"] = this.vendor;
        data["manufacturerId"] = this.manufacturerId;
        data["storageTypeId"] = this.storageTypeId;
        data["productLabelPdfUrl"] = this.productLabelPdfUrl;
        data["manufacturerProductCode"] = this.manufacturerProductCode;
        data["isActive"] = this.isActive;
        data["nutritionalInformation"] = this.nutritionalInformation;
        return data;
    }
}

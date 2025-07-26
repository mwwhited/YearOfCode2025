//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { ISaveOneWorldSyncProductModel } from "./ISaveOneWorldSyncProductModel";
import { ZSaveOneWorldSyncProductModel } from "../Schema/ZSaveOneWorldSyncProductModel";
import { NutritionalInformationModel } from "./NutritionalInformationModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";

type integer = number;

export class SaveOneWorldSyncProductModel implements ISaveOneWorldSyncProductModel {
    readonly $zod: typeof ZSaveOneWorldSyncProductModel = ZSaveOneWorldSyncProductModel;
    
    productId?: integer | undefined;
    productName?: string | undefined;
    gtin?: string | undefined;
    upc?: string | undefined;
    brandName?: string | undefined;
    ingredients?: string | undefined;
    productDescription?: string | undefined;
    vendor?: string | undefined;
    manufacturerId?: integer | undefined;
    storageTypeId?: integer | undefined;
    categoryName?: string | undefined;
    subCategory1Name?: string | undefined;
    subCategory2Name?: string | undefined;
    allergenKeyword?: string | undefined;
    isActive?: boolean | undefined;
    dataForm?: string | undefined;
    nutritionalInformation?: INutritionalInformationModel | undefined;

    constructor(data?: ISaveOneWorldSyncProductModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveOneWorldSyncProductModel>) {
        if (_data) {
            (<any>this).productId = _data["productId"];
            (<any>this).productName = _data["productName"];
            (<any>this).gtin = _data["gtin"];
            (<any>this).upc = _data["upc"];
            (<any>this).brandName = _data["brandName"];
            (<any>this).ingredients = _data["ingredients"];
            (<any>this).productDescription = _data["productDescription"];
            (<any>this).vendor = _data["vendor"];
            (<any>this).manufacturerId = _data["manufacturerId"];
            (<any>this).storageTypeId = _data["storageTypeId"];
            (<any>this).categoryName = _data["categoryName"];
            (<any>this).subCategory1Name = _data["subCategory1Name"];
            (<any>this).subCategory2Name = _data["subCategory2Name"];
            (<any>this).allergenKeyword = _data["allergenKeyword"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).dataForm = _data["dataForm"];
            (<any>this).nutritionalInformation = _data["nutritionalInformation"];
        }
    } 
    
    static fromJS(data: Partial<ISaveOneWorldSyncProductModel>): ISaveOneWorldSyncProductModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveOneWorldSyncProductModel();
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
        data["brandName"] = this.brandName;
        data["ingredients"] = this.ingredients;
        data["productDescription"] = this.productDescription;
        data["vendor"] = this.vendor;
        data["manufacturerId"] = this.manufacturerId;
        data["storageTypeId"] = this.storageTypeId;
        data["categoryName"] = this.categoryName;
        data["subCategory1Name"] = this.subCategory1Name;
        data["subCategory2Name"] = this.subCategory2Name;
        data["allergenKeyword"] = this.allergenKeyword;
        data["isActive"] = this.isActive;
        data["dataForm"] = this.dataForm;
        data["nutritionalInformation"] = this.nutritionalInformation;
        return data;
    }
}

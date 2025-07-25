//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryProductModel } from "./IQueryProductModel";
import { ZQueryProductModel } from "./ZQueryProductModel";

import { NutritionalInformationModel } from "./NutritionalInformationModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";

type integer = number;

export class QueryProductModel implements IQueryProductModel {
    readonly $schema: typeof ZQueryProductModel = ZQueryProductModel;
    productId?: integer | undefined; 
    name?: string | undefined; 
    description?: string | undefined; 
    gtin?: string | undefined; 
    upc?: string | undefined; 
    images?: Istring[] | undefined; 
    isActive?: boolean | undefined; 
    manufacturerId?: integer | undefined; 
    manufacturerName?: string | undefined; 
    iocCategoryId?: integer | undefined; 
    iocCategory?: string | undefined; 
    categoryId?: integer | undefined; 
    category?: string | undefined; 
    subCategoryId?: integer | undefined; 
    subCategory?: string | undefined; 
    storageTypeId?: integer | undefined; 
    storageTypeName?: string | undefined; 
    ingredients?: string | undefined; 
    isAllocated?: boolean | undefined; 
    hasAllergens?: boolean | undefined; 
    hasOneWorldSyncProduct?: boolean | undefined; 
    oneWorldSyncProductId?: integer | undefined; 
    hasProduct?: boolean | undefined; 
    hasSuggestedProducts?: boolean | undefined; 
    hasApprovedSuggestedProducts?: boolean | undefined; 
    isSuggestedProduct?: boolean | undefined; 
    isApprovedSuggestedProduct?: boolean | undefined; 
    nutritionalInformation?: INutritionalInformationModel | undefined; 
    createdOn?: string | undefined; 
    createdById?: integer | undefined; 
    createdBy?: string | undefined; 
    updatedOn?: string | undefined; 
    updatedById?: integer | undefined; 
    updatedBy?: string | undefined; 

    constructor(data?: IQueryProductModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).productId = _data["productId:"];
            (<any>this).name = _data["name:"];
            (<any>this).description = _data["description:"];
            (<any>this).gtin = _data["gtin:"];
            (<any>this).upc = _data["upc:"];
            (<any>this).images = _data["images:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).manufacturerId = _data["manufacturerId:"];
            (<any>this).manufacturerName = _data["manufacturerName:"];
            (<any>this).iocCategoryId = _data["iocCategoryId:"];
            (<any>this).iocCategory = _data["iocCategory:"];
            (<any>this).categoryId = _data["categoryId:"];
            (<any>this).category = _data["category:"];
            (<any>this).subCategoryId = _data["subCategoryId:"];
            (<any>this).subCategory = _data["subCategory:"];
            (<any>this).storageTypeId = _data["storageTypeId:"];
            (<any>this).storageTypeName = _data["storageTypeName:"];
            (<any>this).ingredients = _data["ingredients:"];
            (<any>this).isAllocated = _data["isAllocated:"];
            (<any>this).hasAllergens = _data["hasAllergens:"];
            (<any>this).hasOneWorldSyncProduct = _data["hasOneWorldSyncProduct:"];
            (<any>this).oneWorldSyncProductId = _data["oneWorldSyncProductId:"];
            (<any>this).hasProduct = _data["hasProduct:"];
            (<any>this).hasSuggestedProducts = _data["hasSuggestedProducts:"];
            (<any>this).hasApprovedSuggestedProducts = _data["hasApprovedSuggestedProducts:"];
            (<any>this).isSuggestedProduct = _data["isSuggestedProduct:"];
            (<any>this).isApprovedSuggestedProduct = _data["isApprovedSuggestedProduct:"];
            (<any>this).nutritionalInformation = _data["nutritionalInformation:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).createdById = _data["createdById:"];
            (<any>this).createdBy = _data["createdBy:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryProductModel {
        data = typeof data === 'object' ? data : {};
        let result = new QueryProductModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["productId"] = this.productId;
        data["name"] = this.name;
        data["description"] = this.description;
        data["gtin"] = this.gtin;
        data["upc"] = this.upc;
        data["images"] = this.images;
        data["isActive"] = this.isActive;
        data["manufacturerId"] = this.manufacturerId;
        data["manufacturerName"] = this.manufacturerName;
        data["iocCategoryId"] = this.iocCategoryId;
        data["iocCategory"] = this.iocCategory;
        data["categoryId"] = this.categoryId;
        data["category"] = this.category;
        data["subCategoryId"] = this.subCategoryId;
        data["subCategory"] = this.subCategory;
        data["storageTypeId"] = this.storageTypeId;
        data["storageTypeName"] = this.storageTypeName;
        data["ingredients"] = this.ingredients;
        data["isAllocated"] = this.isAllocated;
        data["hasAllergens"] = this.hasAllergens;
        data["hasOneWorldSyncProduct"] = this.hasOneWorldSyncProduct;
        data["oneWorldSyncProductId"] = this.oneWorldSyncProductId;
        data["hasProduct"] = this.hasProduct;
        data["hasSuggestedProducts"] = this.hasSuggestedProducts;
        data["hasApprovedSuggestedProducts"] = this.hasApprovedSuggestedProducts;
        data["isSuggestedProduct"] = this.isSuggestedProduct;
        data["isApprovedSuggestedProduct"] = this.isApprovedSuggestedProduct;
        data["nutritionalInformation"] = this.nutritionalInformation;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }

}

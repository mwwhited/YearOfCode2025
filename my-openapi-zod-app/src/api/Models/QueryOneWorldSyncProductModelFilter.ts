//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryOneWorldSyncProductModelFilter } from "./IQueryOneWorldSyncProductModelFilter";
import { ZQueryOneWorldSyncProductModelFilter } from "../Schema/ZQueryOneWorldSyncProductModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryOneWorldSyncProductModelFilter implements IQueryOneWorldSyncProductModelFilter {
    readonly $zod: typeof ZQueryOneWorldSyncProductModelFilter = ZQueryOneWorldSyncProductModelFilter;
    
    productId?: IFilterParameter | undefined;
    name?: IFilterParameter | undefined;
    description?: IFilterParameter | undefined;
    gtin?: IFilterParameter | undefined;
    upc?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    manufacturerId?: IFilterParameter | undefined;
    manufacturerName?: IFilterParameter | undefined;
    iocCategoryId?: IFilterParameter | undefined;
    iocCategory?: IFilterParameter | undefined;
    categoryId?: IFilterParameter | undefined;
    category?: IFilterParameter | undefined;
    subCategoryId?: IFilterParameter | undefined;
    subCategory?: IFilterParameter | undefined;
    storageTypeId?: IFilterParameter | undefined;
    storageTypeName?: IFilterParameter | undefined;
    ingredients?: IFilterParameter | undefined;
    isAllocated?: IFilterParameter | undefined;
    hasAllergens?: IFilterParameter | undefined;
    hasOneWorldSyncProduct?: IFilterParameter | undefined;
    oneWorldSyncProductId?: IFilterParameter | undefined;
    hasProduct?: IFilterParameter | undefined;
    hasSuggestedProducts?: IFilterParameter | undefined;
    hasApprovedSuggestedProducts?: IFilterParameter | undefined;
    isSuggestedProduct?: IFilterParameter | undefined;
    isApprovedSuggestedProduct?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    constructor(data?: IQueryOneWorldSyncProductModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryOneWorldSyncProductModelFilter>) {
        if (_data) {
            (<any>this).productId = _data["productId"];
            (<any>this).name = _data["name"];
            (<any>this).description = _data["description"];
            (<any>this).gtin = _data["gtin"];
            (<any>this).upc = _data["upc"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).manufacturerId = _data["manufacturerId"];
            (<any>this).manufacturerName = _data["manufacturerName"];
            (<any>this).iocCategoryId = _data["iocCategoryId"];
            (<any>this).iocCategory = _data["iocCategory"];
            (<any>this).categoryId = _data["categoryId"];
            (<any>this).category = _data["category"];
            (<any>this).subCategoryId = _data["subCategoryId"];
            (<any>this).subCategory = _data["subCategory"];
            (<any>this).storageTypeId = _data["storageTypeId"];
            (<any>this).storageTypeName = _data["storageTypeName"];
            (<any>this).ingredients = _data["ingredients"];
            (<any>this).isAllocated = _data["isAllocated"];
            (<any>this).hasAllergens = _data["hasAllergens"];
            (<any>this).hasOneWorldSyncProduct = _data["hasOneWorldSyncProduct"];
            (<any>this).oneWorldSyncProductId = _data["oneWorldSyncProductId"];
            (<any>this).hasProduct = _data["hasProduct"];
            (<any>this).hasSuggestedProducts = _data["hasSuggestedProducts"];
            (<any>this).hasApprovedSuggestedProducts = _data["hasApprovedSuggestedProducts"];
            (<any>this).isSuggestedProduct = _data["isSuggestedProduct"];
            (<any>this).isApprovedSuggestedProduct = _data["isApprovedSuggestedProduct"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryOneWorldSyncProductModelFilter>): IQueryOneWorldSyncProductModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryOneWorldSyncProductModelFilter();
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
        data["name"] = this.name;
        data["description"] = this.description;
        data["gtin"] = this.gtin;
        data["upc"] = this.upc;
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
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }
}

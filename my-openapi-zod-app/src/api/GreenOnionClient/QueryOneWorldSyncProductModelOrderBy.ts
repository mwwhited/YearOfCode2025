//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryOneWorldSyncProductModelOrderBy } from "./IQueryOneWorldSyncProductModelOrderBy";
import { ZQueryOneWorldSyncProductModelOrderBy } from "./ZQueryOneWorldSyncProductModelOrderBy";
import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryOneWorldSyncProductModelOrderBy implements IQueryOneWorldSyncProductModelOrderBy {
    readonly $zod: typeof ZQueryOneWorldSyncProductModelOrderBy = ZQueryOneWorldSyncProductModelOrderBy;
    
    productId?: IOrderDirections | undefined;
    name?: IOrderDirections | undefined;
    description?: IOrderDirections | undefined;
    gtin?: IOrderDirections | undefined;
    upc?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    manufacturerId?: IOrderDirections | undefined;
    manufacturerName?: IOrderDirections | undefined;
    iocCategoryId?: IOrderDirections | undefined;
    iocCategory?: IOrderDirections | undefined;
    categoryId?: IOrderDirections | undefined;
    category?: IOrderDirections | undefined;
    subCategoryId?: IOrderDirections | undefined;
    subCategory?: IOrderDirections | undefined;
    storageTypeId?: IOrderDirections | undefined;
    storageTypeName?: IOrderDirections | undefined;
    ingredients?: IOrderDirections | undefined;
    isAllocated?: IOrderDirections | undefined;
    hasAllergens?: IOrderDirections | undefined;
    hasOneWorldSyncProduct?: IOrderDirections | undefined;
    oneWorldSyncProductId?: IOrderDirections | undefined;
    hasProduct?: IOrderDirections | undefined;
    hasSuggestedProducts?: IOrderDirections | undefined;
    hasApprovedSuggestedProducts?: IOrderDirections | undefined;
    isSuggestedProduct?: IOrderDirections | undefined;
    isApprovedSuggestedProduct?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    constructor(data?: IQueryOneWorldSyncProductModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryOneWorldSyncProductModelOrderBy>) {
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
    
    static fromJS(data: Partial<IQueryOneWorldSyncProductModelOrderBy>): IQueryOneWorldSyncProductModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryOneWorldSyncProductModelOrderBy();
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

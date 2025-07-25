//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryProductModel } from "./ZQueryProductModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";

type integer = number;

export interface IQueryProductModel {
    $schema: typeof ZQueryProductModel;

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
    nutritionalInformation?: any | undefined; 
    createdOn?: string | undefined; 
    createdById?: integer | undefined; 
    createdBy?: string | undefined; 
    updatedOn?: string | undefined; 
    updatedById?: integer | undefined; 
    updatedBy?: string | undefined; 

    toJSON(data?: any) : any;
}

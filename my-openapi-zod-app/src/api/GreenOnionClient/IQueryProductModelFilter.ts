//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryProductModelFilter } from "./ZQueryProductModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryProductModelFilter {
    $schema: typeof ZQueryProductModelFilter;

    productId?: any | undefined; 
    name?: any | undefined; 
    description?: any | undefined; 
    gtin?: any | undefined; 
    upc?: any | undefined; 
    isActive?: any | undefined; 
    manufacturerId?: any | undefined; 
    manufacturerName?: any | undefined; 
    iocCategoryId?: any | undefined; 
    iocCategory?: any | undefined; 
    categoryId?: any | undefined; 
    category?: any | undefined; 
    subCategoryId?: any | undefined; 
    subCategory?: any | undefined; 
    storageTypeId?: any | undefined; 
    storageTypeName?: any | undefined; 
    ingredients?: any | undefined; 
    isAllocated?: any | undefined; 
    hasAllergens?: any | undefined; 
    hasOneWorldSyncProduct?: any | undefined; 
    oneWorldSyncProductId?: any | undefined; 
    hasProduct?: any | undefined; 
    hasSuggestedProducts?: any | undefined; 
    hasApprovedSuggestedProducts?: any | undefined; 
    isSuggestedProduct?: any | undefined; 
    isApprovedSuggestedProduct?: any | undefined; 
    createdOn?: any | undefined; 
    createdById?: any | undefined; 
    createdBy?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 

    toJSON(data?: any) : any;
}

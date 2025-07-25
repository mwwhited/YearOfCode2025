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

    toJSON(data?: any) : any;
}

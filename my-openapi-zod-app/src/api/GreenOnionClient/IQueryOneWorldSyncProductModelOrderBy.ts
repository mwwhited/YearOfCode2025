//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryOneWorldSyncProductModelOrderBy } from "./ZQueryOneWorldSyncProductModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryOneWorldSyncProductModelOrderBy {
    $schema: typeof ZQueryOneWorldSyncProductModelOrderBy;

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

    toJSON(data?: any) : any;
}

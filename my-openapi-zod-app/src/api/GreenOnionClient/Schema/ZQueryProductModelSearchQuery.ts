//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZQueryProductModelFilter } from "./ZQueryProductModelFilter";
import { ZQueryProductModelOrderBy } from "./ZQueryProductModelOrderBy";

export const ZQueryProductModelSearchQuery = z.object({
    currentPage:z.number().int().optional().describe("Gets or sets the current page number."),
    pageSize:z.number().int().optional().describe("**Default size:** `10`, `-1` will disable paging"),
    excludePageCount:z.boolean().optional().describe("`true` will disable row/page counts and may decrease processing time without effecting paging functions"),
    searchTerm:z.string().optional().describe("**Searched Properties:** Name; Description; Gtin; Upc; ManufacturerName; IocCategory; Category; SubCategory; StorageTypeName; Ingredients; CreatedBy; UpdatedBy"),
    filter:ZQueryProductModelFilter.optional(),
    orderBy:ZQueryProductModelOrderBy.optional(),
});

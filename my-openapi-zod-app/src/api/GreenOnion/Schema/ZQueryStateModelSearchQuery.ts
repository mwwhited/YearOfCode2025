//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import { ZQueryStateModelFilter } from "./ZQueryStateModelFilter";
import { ZQueryStateModelOrderBy } from "./ZQueryStateModelOrderBy";

const ZQueryStateModelSearchQuery = z.object({
    currentPage:z.number().int().optional().describe(`Gets or sets the current page number.`),
    pageSize:z.number().int().optional().describe(`**Default size:** ``10``, ``-1`` will disable paging`),
    excludePageCount:z.boolean().optional().describe(```true`` will disable row/page counts and may decrease processing time without effecting paging functions`),
    searchTerm:z.string().optional().describe(`**Searched Properties:** StateName`),
    filter:ZQueryStateModelFilter.optional(),
    orderBy:ZQueryStateModelOrderBy.optional(),
});

export default ZQueryStateModelSearchQuery;
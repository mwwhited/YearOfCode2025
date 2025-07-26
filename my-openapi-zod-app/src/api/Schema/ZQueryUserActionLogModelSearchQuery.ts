//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZQueryUserActionLogModelFilter } from "./ZQueryUserActionLogModelFilter";
import { ZQueryUserActionLogModelOrderBy } from "./ZQueryUserActionLogModelOrderBy";

export const ZQueryUserActionLogModelSearchQuery = z.object({
    currentPage:z.number().int().optional().describe(`Gets or sets the current page number.`),
    pageSize:z.number().int().optional().describe(`**Default size:** ``10``, ``-1`` will disable paging`),
    excludePageCount:z.boolean().optional().describe(```true`` will disable row/page counts and may decrease processing time without effecting paging functions`),
    searchTerm:z.string().optional().describe(`**Searched Properties:** EventType; HttpMethod; EventDate; SessionId; RequestId; CorrelationId; RequestPath; User`),
    filter:ZQueryUserActionLogModelFilter.optional(),
    orderBy:ZQueryUserActionLogModelOrderBy.optional(),
});

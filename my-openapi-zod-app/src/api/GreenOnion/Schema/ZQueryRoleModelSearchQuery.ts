//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZQueryRoleModelFilter from "./ZQueryRoleModelFilter";
import ZQueryRoleModelOrderBy from "./ZQueryRoleModelOrderBy";

const ZQueryRoleModelSearchQuery = z.object({
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQueryRoleModelFilter.optional(),
    orderBy: ZQueryRoleModelOrderBy.optional(),
});

export default ZQueryRoleModelSearchQuery;
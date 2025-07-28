//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZQueryMonthlyNumberModelFilter from "./ZQueryMonthlyNumberModelFilter";
import ZQueryMonthlyNumberModelOrderBy from "./ZQueryMonthlyNumberModelOrderBy";

const ZQueryMonthlyNumberModelSearchQuery = z.object({
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQueryMonthlyNumberModelFilter.optional(),
    orderBy: ZQueryMonthlyNumberModelOrderBy.optional(),
});

export default ZQueryMonthlyNumberModelSearchQuery;
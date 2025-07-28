//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZQueryDistributorModelFilter from "./ZQueryDistributorModelFilter";
import ZQueryDistributorModelOrderBy from "./ZQueryDistributorModelOrderBy";

const ZQueryDistributorModelSearchQuery = z.object({
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQueryDistributorModelFilter.optional(),
    orderBy: ZQueryDistributorModelOrderBy.optional(),
});

export default ZQueryDistributorModelSearchQuery;
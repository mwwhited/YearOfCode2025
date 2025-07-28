//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZQueryOneWorldSyncProductModelFilter from "./ZQueryOneWorldSyncProductModelFilter";
import ZQueryOneWorldSyncProductModelOrderBy from "./ZQueryOneWorldSyncProductModelOrderBy";

const ZQueryOneWorldSyncProductModelSearchQuery = z.object({
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQueryOneWorldSyncProductModelFilter.optional(),
    orderBy: ZQueryOneWorldSyncProductModelOrderBy.optional(),
});

export default ZQueryOneWorldSyncProductModelSearchQuery;
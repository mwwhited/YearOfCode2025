//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";
import ZQueryCategoryModelFilter from "./ZQueryCategoryModelFilter";
import ZQueryCategoryModelOrderBy from "./ZQueryCategoryModelOrderBy";

const ZQueryCategoryModelSearchQuery = z.object({
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQueryCategoryModelFilter.optional(),
    orderBy: ZQueryCategoryModelOrderBy.optional(),
});

export default ZQueryCategoryModelSearchQuery;
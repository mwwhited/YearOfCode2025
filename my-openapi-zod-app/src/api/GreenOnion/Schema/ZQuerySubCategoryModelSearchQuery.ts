//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";
import ZQuerySubCategoryModelFilter from "./ZQuerySubCategoryModelFilter";
import ZQuerySubCategoryModelOrderBy from "./ZQuerySubCategoryModelOrderBy";

const ZQuerySubCategoryModelSearchQuery = z.object({
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQuerySubCategoryModelFilter.optional(),
    orderBy: ZQuerySubCategoryModelOrderBy.optional(),
});

export default ZQuerySubCategoryModelSearchQuery;
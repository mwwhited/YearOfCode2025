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
    currentPage: z.number().int().meta({}).nullish(),  
    pageSize: z.number().int().meta({}).nullish(),  
    excludePageCount: z.boolean().meta({}).nullish(),  
    searchTerm: z.string().meta({}).nullish(),  
    filter: ZQuerySubCategoryModelFilter.nullish(),  
    orderBy: ZQuerySubCategoryModelOrderBy.nullish(),  
});

export default ZQuerySubCategoryModelSearchQuery;
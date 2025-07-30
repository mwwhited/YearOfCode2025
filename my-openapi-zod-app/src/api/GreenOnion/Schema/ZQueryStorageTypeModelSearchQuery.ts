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
import ZQueryStorageTypeModelFilter from "./ZQueryStorageTypeModelFilter";
import ZQueryStorageTypeModelOrderBy from "./ZQueryStorageTypeModelOrderBy";

const ZQueryStorageTypeModelSearchQuery = z.object({
    currentPage: z.number().int().meta({}).nullish(),  
    pageSize: z.number().int().meta({}).nullish(),  
    excludePageCount: z.boolean().meta({}).nullish(),  
    searchTerm: z.string().meta({}).nullish(),  
    filter: ZQueryStorageTypeModelFilter.nullish(),  
    orderBy: ZQueryStorageTypeModelOrderBy.nullish(),  
});

export default ZQueryStorageTypeModelSearchQuery;
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
import ZQueryUserActionLogModelFilter from "./ZQueryUserActionLogModelFilter";
import ZQueryUserActionLogModelOrderBy from "./ZQueryUserActionLogModelOrderBy";

const ZQueryUserActionLogModelSearchQuery = z.object({
    currentPage: z.number().int().meta({}).nullish(),  
    pageSize: z.number().int().meta({}).nullish(),  
    excludePageCount: z.boolean().meta({}).nullish(),  
    searchTerm: z.string().meta({}).nullish(),  
    filter: ZQueryUserActionLogModelFilter.nullish(),  
    orderBy: ZQueryUserActionLogModelOrderBy.nullish(),  
});

export default ZQueryUserActionLogModelSearchQuery;
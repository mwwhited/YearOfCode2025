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
import ZQueryDistributorModelFilter from "./ZQueryDistributorModelFilter";
import ZQueryDistributorModelOrderBy from "./ZQueryDistributorModelOrderBy";

const ZQueryDistributorModelSearchQuery = z.object({
    currentPage: z.number().int().nullish().meta({}),  
    pageSize: z.number().int().nullish().meta({}),  
    excludePageCount: z.boolean().nullish().meta({}),  
    searchTerm: z.string().nullish().meta({}),  
    filter: ZQueryDistributorModelFilter.nullish(),  
    orderBy: ZQueryDistributorModelOrderBy.nullish(),  
});

export default ZQueryDistributorModelSearchQuery;
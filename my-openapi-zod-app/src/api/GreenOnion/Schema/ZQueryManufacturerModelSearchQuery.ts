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
import ZQueryManufacturerModelFilter from "./ZQueryManufacturerModelFilter";
import ZQueryManufacturerModelOrderBy from "./ZQueryManufacturerModelOrderBy";

const ZQueryManufacturerModelSearchQuery = z.object({
    currentPage: z.number().int().nullish().meta({}),  
    pageSize: z.number().int().nullish().meta({}),  
    excludePageCount: z.boolean().nullish().meta({}),  
    searchTerm: z.string().nullish().meta({}),  
    filter: ZQueryManufacturerModelFilter.nullish(),  
    orderBy: ZQueryManufacturerModelOrderBy.nullish(),  
});

export default ZQueryManufacturerModelSearchQuery;
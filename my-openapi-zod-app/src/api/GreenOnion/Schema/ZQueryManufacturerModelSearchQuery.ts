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
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQueryManufacturerModelFilter.optional(),
    orderBy: ZQueryManufacturerModelOrderBy.optional(),
});

export default ZQueryManufacturerModelSearchQuery;
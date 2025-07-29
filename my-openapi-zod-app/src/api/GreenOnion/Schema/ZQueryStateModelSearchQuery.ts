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
import ZQueryStateModelFilter from "./ZQueryStateModelFilter";
import ZQueryStateModelOrderBy from "./ZQueryStateModelOrderBy";

const ZQueryStateModelSearchQuery = z.object({
    currentPage: z.number().int().nullish(),
    pageSize: z.number().int().nullish(),
    excludePageCount: z.boolean().nullish(),
    searchTerm: z.string().nullish(),
    filter: ZQueryStateModelFilter.nullish(),
    orderBy: ZQueryStateModelOrderBy.nullish(),
});

export default ZQueryStateModelSearchQuery;
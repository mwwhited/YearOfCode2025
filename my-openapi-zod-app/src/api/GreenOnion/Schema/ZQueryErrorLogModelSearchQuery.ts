//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";
import ZQueryErrorLogModelFilter from "./ZQueryErrorLogModelFilter";
import ZQueryErrorLogModelOrderBy from "./ZQueryErrorLogModelOrderBy";

const ZQueryErrorLogModelSearchQuery = z.object({
    currentPage: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    excludePageCount: z.boolean().optional(),
    searchTerm: z.string().optional(),
    filter: ZQueryErrorLogModelFilter.optional(),
    orderBy: ZQueryErrorLogModelOrderBy.optional(),
});

export default ZQueryErrorLogModelSearchQuery;
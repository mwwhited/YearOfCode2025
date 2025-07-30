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
import ZQuerySchoolDistrictModelFilter from "./ZQuerySchoolDistrictModelFilter";
import ZQuerySchoolDistrictModelOrderBy from "./ZQuerySchoolDistrictModelOrderBy";

const ZQuerySchoolDistrictModelSearchQuery = z.object({
    currentPage: z.number().int().nullish().meta({}),  
    pageSize: z.number().int().nullish().meta({}),  
    excludePageCount: z.boolean().nullish().meta({}),  
    searchTerm: z.string().nullish().meta({}),  
    filter: ZQuerySchoolDistrictModelFilter.nullish(),  
    orderBy: ZQuerySchoolDistrictModelOrderBy.nullish(),  
});

export default ZQuerySchoolDistrictModelSearchQuery;
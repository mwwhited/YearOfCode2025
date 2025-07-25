//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZQuerySchoolDistrictModelFilter } from "./ZQuerySchoolDistrictModelFilter";
import { ZQuerySchoolDistrictModelOrderBy } from "./ZQuerySchoolDistrictModelOrderBy";

export const ZQuerySchoolDistrictModelSearchQuery = z.object({
    currentPage:z.number().int().optional().describe("Gets or sets the current page number."),
    pageSize:z.number().int().optional().describe("**Default size:** `10`, `-1` will disable paging"),
    excludePageCount:z.boolean().optional().describe("`true` will disable row/page counts and may decrease processing time without effecting paging functions"),
    searchTerm:z.string().optional().describe("**Searched Properties:** SiteCode; DistrictName; PhoneNumber; Email; Country; State; City; DistrictLogo; FoodServiceOptions; ContractCompany; SchoolCoopName; CreatedBy; UpdatedBy"),
    filter:ZQuerySchoolDistrictModelFilter.optional(),
    orderBy:ZQuerySchoolDistrictModelOrderBy.optional(),
});

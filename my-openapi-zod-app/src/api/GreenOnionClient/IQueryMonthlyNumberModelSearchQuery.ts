//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelSearchQuery } from "./ZQueryMonthlyNumberModelSearchQuery";
import type { IQueryMonthlyNumberModelFilter } from "./IQueryMonthlyNumberModelFilter";
import type { IQueryMonthlyNumberModelOrderBy } from "./IQueryMonthlyNumberModelOrderBy";

type integer = number;

export interface IQueryMonthlyNumberModelSearchQuery {
    $schema: typeof ZQueryMonthlyNumberModelSearchQuery;

    currentPage?: integer | undefined;/*Gets or sets the current page number.*/
    pageSize?: integer | undefined;/***Default size:** `10`, `-1` will disable paging*/
    excludePageCount?: boolean | undefined;/*`true` will disable row/page counts and may decrease processing time without effecting paging functions*/
    searchTerm?: string | undefined;/***Searched Properties:** SchoolDistrictId; MonthId; ActualMonthId; Year; Enrollment; NumberOfSites; NumberOfDistricts; MealsServed; FreeAndReducedPercent; IsActive; RegDate; CreatedBy; UpdatedBy*/
    filter?: IQueryMonthlyNumberModelFilter | undefined;
    orderBy?: IQueryMonthlyNumberModelOrderBy | undefined;

    toJSON(data?: any) : any;
}

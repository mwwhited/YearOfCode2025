//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStateModelSearchQuery } from "./ZQueryStateModelSearchQuery";
import type { IQueryStateModelFilter } from "./IQueryStateModelFilter";
import type { IQueryStateModelOrderBy } from "./IQueryStateModelOrderBy";

type integer = number;

export interface IQueryStateModelSearchQuery {
    $schema: typeof ZQueryStateModelSearchQuery;

    currentPage?: integer | undefined;/*Gets or sets the current page number.*/
    pageSize?: integer | undefined;/***Default size:** `10`, `-1` will disable paging*/
    excludePageCount?: boolean | undefined;/*`true` will disable row/page counts and may decrease processing time without effecting paging functions*/
    searchTerm?: string | undefined;/***Searched Properties:** StateName*/
    filter?: IQueryStateModelFilter | undefined;
    orderBy?: IQueryStateModelOrderBy | undefined;

    toJSON(data?: any) : any;
}

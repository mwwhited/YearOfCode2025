//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserActionLogModelSearchQuery } from "./ZQueryUserActionLogModelSearchQuery";
import type { IQueryUserActionLogModelFilter } from "./IQueryUserActionLogModelFilter";
import type { IQueryUserActionLogModelOrderBy } from "./IQueryUserActionLogModelOrderBy";

type integer = number;

export interface IQueryUserActionLogModelSearchQuery {
    $schema: typeof ZQueryUserActionLogModelSearchQuery;

    currentPage?: integer | undefined; /* Gets or sets the current page number. */
    pageSize?: integer | undefined; /* **Default size:** `10`, `-1` will disable paging */
    excludePageCount?: boolean | undefined; /* `true` will disable row/page counts and may decrease processing time without effecting paging functions */
    searchTerm?: string | undefined; /* **Searched Properties:** EventType; HttpMethod; EventDate; SessionId; RequestId; CorrelationId; RequestPath; User */
    filter?: any | undefined; 
    orderBy?: any | undefined; 

    toJSON(data?: any) : any;
}

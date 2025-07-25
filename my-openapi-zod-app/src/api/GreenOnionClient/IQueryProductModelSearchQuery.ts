//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryProductModelSearchQuery } from "./ZQueryProductModelSearchQuery";
import type { IQueryProductModelFilter } from "./IQueryProductModelFilter";
import type { IQueryProductModelOrderBy } from "./IQueryProductModelOrderBy";

type integer = number;

export interface IQueryProductModelSearchQuery {
    $schema: typeof ZQueryProductModelSearchQuery;

    currentPage?: integer | undefined; /* Gets or sets the current page number. */
    pageSize?: integer | undefined; /* **Default size:** `10`, `-1` will disable paging */
    excludePageCount?: boolean | undefined; /* `true` will disable row/page counts and may decrease processing time without effecting paging functions */
    searchTerm?: string | undefined; /* **Searched Properties:** Name; Description; Gtin; Upc; ManufacturerName; IocCategory; Category; SubCategory; StorageTypeName; Ingredients; CreatedBy; UpdatedBy */
    filter?: any | undefined; 
    orderBy?: any | undefined; 

    toJSON(data?: any) : any;
}

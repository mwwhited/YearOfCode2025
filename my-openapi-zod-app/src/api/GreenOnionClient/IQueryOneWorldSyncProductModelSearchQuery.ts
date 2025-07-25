//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryOneWorldSyncProductModelSearchQuery } from "./ZQueryOneWorldSyncProductModelSearchQuery";
import type { IQueryOneWorldSyncProductModelFilter } from "./IQueryOneWorldSyncProductModelFilter";
import type { IQueryOneWorldSyncProductModelOrderBy } from "./IQueryOneWorldSyncProductModelOrderBy";

type integer = number;

export interface IQueryOneWorldSyncProductModelSearchQuery {
    $schema: typeof ZQueryOneWorldSyncProductModelSearchQuery;

    currentPage?: integer | undefined;/*Gets or sets the current page number.*/
    pageSize?: integer | undefined;/***Default size:** `10`, `-1` will disable paging*/
    excludePageCount?: boolean | undefined;/*`true` will disable row/page counts and may decrease processing time without effecting paging functions*/
    searchTerm?: string | undefined;/***Searched Properties:** Name; Description; Gtin; Upc; ManufacturerName; IocCategory; Category; SubCategory; StorageTypeName; Ingredients; CreatedBy; UpdatedBy*/
    filter?: IQueryOneWorldSyncProductModelFilter | undefined;
    orderBy?: IQueryOneWorldSyncProductModelOrderBy | undefined;

    toJSON(data?: any) : any;
}

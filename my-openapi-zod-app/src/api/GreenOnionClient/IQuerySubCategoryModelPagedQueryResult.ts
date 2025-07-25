//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySubCategoryModelPagedQueryResult } from "./ZQuerySubCategoryModelPagedQueryResult";
import type { IQuerySubCategoryModel } from "./IQuerySubCategoryModel";
import type { IResultMessage } from "./IResultMessage";

type integer = number;

export interface IQuerySubCategoryModelPagedQueryResult {
    $schema: typeof ZQuerySubCategoryModelPagedQueryResult;

    rows?: IQuerySubCategoryModel[] | undefined; /* Gets the collection of items in the result. */
    messages?: IResultMessage[] | undefined; /* Gets or sets the collection of result messages associated with the query result. */
    currentPage?: integer | undefined; /* Gets the total number of pages. */
    totalPageCount?: integer | undefined; /* Gets the total number of pages. */
    totalRowCount?: integer | undefined; /* Gets the total number of rows. */

    toJSON(data?: any) : any;
}

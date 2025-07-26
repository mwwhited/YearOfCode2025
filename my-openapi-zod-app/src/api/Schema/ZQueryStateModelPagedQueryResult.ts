//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZQueryStateModel } from "./ZQueryStateModel";
import { ZResultMessage } from "./ZResultMessage";

export const ZQueryStateModelPagedQueryResult = z.object({
    rows:z.array(ZQueryStateModel).optional().describe(`Gets the collection of items in the result.`),
    messages:z.array(ZResultMessage).optional().describe(`Gets or sets the collection of result messages associated with the query result.`),
    currentPage:z.number().int().optional().describe(`Gets the total number of pages.`),
    totalPageCount:z.number().int().optional().describe(`Gets the total number of pages.`),
    totalRowCount:z.number().int().optional().describe(`Gets the total number of rows.`),
});

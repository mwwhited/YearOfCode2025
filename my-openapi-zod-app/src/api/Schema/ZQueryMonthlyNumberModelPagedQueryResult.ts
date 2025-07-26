//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZQueryMonthlyNumberModel } from "./ZQueryMonthlyNumberModel";
import { ZResultMessage } from "./ZResultMessage";

export const ZQueryMonthlyNumberModelPagedQueryResult = z.object({
    rows:z.array(ZQueryMonthlyNumberModel).optional().describe(`Gets the collection of items in the result.`),
    messages:z.array(ZResultMessage).optional().describe(`Gets or sets the collection of result messages associated with the query result.`),
    currentPage:z.number().int().optional().describe(`Gets the total number of pages.`),
    totalPageCount:z.number().int().optional().describe(`Gets the total number of pages.`),
    totalRowCount:z.number().int().optional().describe(`Gets the total number of rows.`),
});

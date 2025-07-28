//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZQueryMonthlyNumberModel from "./ZQueryMonthlyNumberModel";
import ZResultMessage from "./ZResultMessage";

const ZQueryMonthlyNumberModelPagedQueryResult = z.object({
    rows: z.array(ZQueryMonthlyNumberModel).optional(),
    messages: z.array(ZResultMessage).optional(),
    currentPage: z.number().int().optional(),
    totalPageCount: z.number().int().optional(),
    totalRowCount: z.number().int().optional(),
});

export default ZQueryMonthlyNumberModelPagedQueryResult;
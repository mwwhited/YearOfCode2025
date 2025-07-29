//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";
import ZQueryMonthlyNumberModel from "./ZQueryMonthlyNumberModel";
import ZResultMessage from "./ZResultMessage";

const ZQueryMonthlyNumberModelPagedQueryResult = z.object({
    rows: z.array(ZQueryMonthlyNumberModel).nullish(),
    messages: z.array(ZResultMessage).nullish(),
    currentPage: z.number().int().nullish(),
    totalPageCount: z.number().int().nullish(),
    totalRowCount: z.number().int().nullish(),
});

export default ZQueryMonthlyNumberModelPagedQueryResult;
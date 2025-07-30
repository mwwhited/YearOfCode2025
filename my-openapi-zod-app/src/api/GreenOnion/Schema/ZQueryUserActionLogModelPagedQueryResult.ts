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
import ZQueryUserActionLogModel from "./ZQueryUserActionLogModel";
import ZResultMessage from "./ZResultMessage";

const ZQueryUserActionLogModelPagedQueryResult = z.object({
    rows: z.array(ZQueryUserActionLogModel).nullish().meta({}),  
    messages: z.array(ZResultMessage).nullish().meta({}),  
    currentPage: z.number().int().nullish().meta({}),  
    totalPageCount: z.number().int().nullish().meta({}),  
    totalRowCount: z.number().int().nullish().meta({}),  
});

export default ZQueryUserActionLogModelPagedQueryResult;
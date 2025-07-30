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
import ZQueryProductModel from "./ZQueryProductModel";
import ZResultMessage from "./ZResultMessage";

const ZQueryProductModelPagedQueryResult = z.object({
    rows: z.array(ZQueryProductModel).nullish().meta({}),  
    messages: z.array(ZResultMessage).nullish().meta({}),  
    currentPage: z.number().int().nullish().meta({}),  
    totalPageCount: z.number().int().nullish().meta({}),  
    totalRowCount: z.number().int().nullish().meta({}),  
});

export default ZQueryProductModelPagedQueryResult;
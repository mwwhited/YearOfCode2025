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
import ZQueryDefinedFilterModel from "./ZQueryDefinedFilterModel";
import ZResultMessage from "./ZResultMessage";

const ZQueryDefinedFilterModelPagedQueryResult = z.object({
    rows: z.array(ZQueryDefinedFilterModel).meta({}).nullish(),  
    messages: z.array(ZResultMessage).meta({}).nullish(),  
    currentPage: z.number().int().meta({}).nullish(),  
    totalPageCount: z.number().int().meta({}).nullish(),  
    totalRowCount: z.number().int().meta({}).nullish(),  
});

export default ZQueryDefinedFilterModelPagedQueryResult;
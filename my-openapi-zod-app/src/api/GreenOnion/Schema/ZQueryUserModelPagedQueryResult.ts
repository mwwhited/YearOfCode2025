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
import ZQueryUserModel from "./ZQueryUserModel";
import ZResultMessage from "./ZResultMessage";

const ZQueryUserModelPagedQueryResult = z.object({
    rows: z.array(ZQueryUserModel).nullish(),
    messages: z.array(ZResultMessage).nullish(),
    currentPage: z.number().int().nullish(),
    totalPageCount: z.number().int().nullish(),
    totalRowCount: z.number().int().nullish(),
});

export default ZQueryUserModelPagedQueryResult;
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
import ZQuerySchoolDistrictModel from "./ZQuerySchoolDistrictModel";
import ZResultMessage from "./ZResultMessage";

const ZQuerySchoolDistrictModelPagedQueryResult = z.object({
    rows: z.array(ZQuerySchoolDistrictModel).nullish().meta({}),  
    messages: z.array(ZResultMessage).nullish().meta({}),  
    currentPage: z.number().int().nullish().meta({}),  
    totalPageCount: z.number().int().nullish().meta({}),  
    totalRowCount: z.number().int().nullish().meta({}),  
});

export default ZQuerySchoolDistrictModelPagedQueryResult;
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
    rows: z.array(ZQuerySchoolDistrictModel).optional(),
    messages: z.array(ZResultMessage).optional(),
    currentPage: z.number().int().optional(),
    totalPageCount: z.number().int().optional(),
    totalRowCount: z.number().int().optional(),
});

export default ZQuerySchoolDistrictModelPagedQueryResult;
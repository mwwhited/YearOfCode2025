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
import ZProductCheck from "./ZProductCheck";

const ZSelectProductSaveCheckListRequestModel = z.object({
    uniqueExcelFileId: z.string().optional(),
    userOrDistrictId: z.number().int().optional(),
    option: z.string().optional(),
    productCheckList: z.array(ZProductCheck).optional(),
});

export default ZSelectProductSaveCheckListRequestModel;
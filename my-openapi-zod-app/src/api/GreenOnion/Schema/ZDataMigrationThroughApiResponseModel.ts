//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZDataMigrationThroughApiResponseModel = z.object({
    success: z.boolean().optional(),
    message: z.string().optional(),
    totalRecords: z.number().int().optional(),
    payload: z.unknown().optional(),
    isUpdate: z.boolean().optional(),
    isAdded: z.boolean().optional(),
    isDelete: z.boolean().optional(),
});

export default ZDataMigrationThroughApiResponseModel;
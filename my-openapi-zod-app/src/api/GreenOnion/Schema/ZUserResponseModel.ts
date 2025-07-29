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
import ZRoleMst from "./ZRoleMst";

const ZUserResponseModel = z.object({
    success: z.boolean().nullish(),
    message: z.string().nullish(),
    totalRecords: z.number().int().nullish(),
    payload: z.unknown().nullish(),
    isUpdate: z.boolean().nullish(),
    isAdded: z.boolean().nullish(),
    isDelete: z.boolean().nullish(),
    roleList: z.array(ZRoleMst).nullish(),
    isEmailExists: z.boolean().nullish(),
});

export default ZUserResponseModel;
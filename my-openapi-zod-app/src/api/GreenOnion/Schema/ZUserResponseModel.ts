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
    success: z.boolean().meta({}).nullish(),  
    message: z.string().meta({}).nullish(),  
    totalRecords: z.number().int().meta({}).nullish(),  
    payload: z.any().meta({}).nullish(),  
    isUpdate: z.boolean().meta({}).nullish(),  
    isAdded: z.boolean().meta({}).nullish(),  
    isDelete: z.boolean().meta({}).nullish(),  
    roleList: z.array(ZRoleMst).meta({}).nullish(),  
    isEmailExists: z.boolean().meta({}).nullish(),  
});

export default ZUserResponseModel;
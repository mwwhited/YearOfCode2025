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

const ZRoleMst = z.object({
    roleId: z.number().int().meta({}).nullish(),  
    roleName: z.string().meta({}).nullish(),  
    parentRoleId: z.number().int().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    createdByUserId: z.number().int().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedByUserId: z.number().int().meta({}).nullish(),  
});

export default ZRoleMst;
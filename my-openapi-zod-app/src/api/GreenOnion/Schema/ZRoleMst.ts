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
    roleId: z.number().int().nullish().meta({}),  
    roleName: z.string().nullish().meta({}),  
    parentRoleId: z.number().int().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    createdOn: z.string().nullish().meta({}),  
    createdByUserId: z.number().int().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedByUserId: z.number().int().nullish().meta({}),  
});

export default ZRoleMst;
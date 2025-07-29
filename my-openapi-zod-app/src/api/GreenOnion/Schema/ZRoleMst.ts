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
    roleId: z.number().int().nullish(),
    roleName: z.string().nullish(),
    parentRoleId: z.number().int().nullish(),
    isActive: z.boolean().nullish(),
    createdOn: z.string().nullish(),
    createdByUserId: z.number().int().nullish(),
    updatedOn: z.string().nullish(),
    updatedByUserId: z.number().int().nullish(),
});

export default ZRoleMst;
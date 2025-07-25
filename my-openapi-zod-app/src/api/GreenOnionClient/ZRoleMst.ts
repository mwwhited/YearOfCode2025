//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZRoleMst = z.object({
    roleId:z.number().int().optional(),
    roleName:z.string().optional(),
    parentRoleId:z.number().int().optional(),
    isActive:z.boolean().optional(),
    createdOn:z.string().optional(),
    createdByUserId:z.number().int().optional(),
    updatedOn:z.string().optional(),
    updatedByUserId:z.number().int().optional(),
});


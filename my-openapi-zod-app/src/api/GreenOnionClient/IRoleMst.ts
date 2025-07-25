//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZRoleMst } from "./ZRoleMst";

type integer = number;

export interface IRoleMst {
    $schema: typeof ZRoleMst;

    roleId?: integer | undefined;
    roleName?: string | undefined;
    parentRoleId?: integer | undefined;
    isActive?: boolean | undefined;
    createdOn?: string | undefined;
    createdByUserId?: integer | undefined;
    updatedOn?: string | undefined;
    updatedByUserId?: integer | undefined;

    toJSON(data?: any) : any;
}

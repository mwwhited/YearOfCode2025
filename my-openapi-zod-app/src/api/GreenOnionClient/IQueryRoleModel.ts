//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryRoleModel } from "./ZQueryRoleModel";

type integer = number;

export interface IQueryRoleModel {
    $schema: typeof ZQueryRoleModel;

    roleId?: integer | undefined;
    roleName?: string | undefined;
    isActive?: boolean | undefined;
    userCount?: integer | undefined;
    activeUserCount?: integer | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    toJSON(data?: any) : any;
}

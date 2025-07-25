//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryRoleModelOrderBy } from "./ZQueryRoleModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryRoleModelOrderBy {
    $schema: typeof ZQueryRoleModelOrderBy;

    roleId?: IOrderDirections | undefined;
    roleName?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    userCount?: IOrderDirections | undefined;
    activeUserCount?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryRoleModelFilter } from "./ZQueryRoleModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryRoleModelFilter {
    $schema: typeof ZQueryRoleModelFilter;

    roleId?: IFilterParameter | undefined;
    roleName?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    userCount?: IFilterParameter | undefined;
    activeUserCount?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

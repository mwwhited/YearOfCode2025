//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserModelFilter } from "./ZQueryUserModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryUserModelFilter {
    $schema: typeof ZQueryUserModelFilter;

    userId?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    firstName?: IFilterParameter | undefined;
    lastName?: IFilterParameter | undefined;
    objectId?: IFilterParameter | undefined;
    email?: IFilterParameter | undefined;
    mobile?: IFilterParameter | undefined;
    profileImage?: IFilterParameter | undefined;
    coverImage?: IFilterParameter | undefined;
    addressLine1?: IFilterParameter | undefined;
    addressLine2?: IFilterParameter | undefined;
    city?: IFilterParameter | undefined;
    country?: IFilterParameter | undefined;
    zipCode?: IFilterParameter | undefined;
    stateId?: IFilterParameter | undefined;
    state?: IFilterParameter | undefined;
    roleId?: IFilterParameter | undefined;
    roleName?: IFilterParameter | undefined;
    schoolDistrictId?: IFilterParameter | undefined;
    schoolDistrictName?: IFilterParameter | undefined;
    manufacturerId?: IFilterParameter | undefined;
    manufacturerName?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

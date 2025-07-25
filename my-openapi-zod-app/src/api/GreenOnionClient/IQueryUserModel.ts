//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserModel } from "./ZQueryUserModel";

type integer = number;

export interface IQueryUserModel {
    $schema: typeof ZQueryUserModel;

    userId?: integer | undefined;
    isActive?: boolean | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    objectId?: string | undefined;
    email?: string | undefined;
    mobile?: string | undefined;
    profileImage?: string | undefined;
    coverImage?: string | undefined;
    addressLine1?: string | undefined;
    addressLine2?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    zipCode?: string | undefined;
    stateId?: integer | undefined;
    state?: string | undefined;
    roleId?: integer | undefined;
    roleName?: string | undefined;
    schoolDistrictId?: integer | undefined;
    schoolDistrictName?: string | undefined;
    manufacturerId?: integer | undefined;
    manufacturerName?: string | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserModelOrderBy } from "./ZQueryUserModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryUserModelOrderBy {
    $schema: typeof ZQueryUserModelOrderBy;

    userId?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    firstName?: IOrderDirections | undefined;
    lastName?: IOrderDirections | undefined;
    objectId?: IOrderDirections | undefined;
    email?: IOrderDirections | undefined;
    mobile?: IOrderDirections | undefined;
    profileImage?: IOrderDirections | undefined;
    coverImage?: IOrderDirections | undefined;
    addressLine1?: IOrderDirections | undefined;
    addressLine2?: IOrderDirections | undefined;
    city?: IOrderDirections | undefined;
    country?: IOrderDirections | undefined;
    zipCode?: IOrderDirections | undefined;
    stateId?: IOrderDirections | undefined;
    state?: IOrderDirections | undefined;
    roleId?: IOrderDirections | undefined;
    roleName?: IOrderDirections | undefined;
    schoolDistrictId?: IOrderDirections | undefined;
    schoolDistrictName?: IOrderDirections | undefined;
    manufacturerId?: IOrderDirections | undefined;
    manufacturerName?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

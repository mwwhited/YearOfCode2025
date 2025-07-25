//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModelOrderBy } from "./ZQuerySchoolDistrictModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQuerySchoolDistrictModelOrderBy {
    $schema: typeof ZQuerySchoolDistrictModelOrderBy;

    schoolDistrictId?: IOrderDirections | undefined;
    siteCode?: IOrderDirections | undefined;
    districtName?: IOrderDirections | undefined;
    phoneNumber?: IOrderDirections | undefined;
    email?: IOrderDirections | undefined;
    country?: IOrderDirections | undefined;
    stateId?: IOrderDirections | undefined;
    state?: IOrderDirections | undefined;
    city?: IOrderDirections | undefined;
    districtLogo?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    foodServiceOptions?: IOrderDirections | undefined;
    contractCompany?: IOrderDirections | undefined;
    isSchoolCoopMember?: IOrderDirections | undefined;
    isSchoolCoop?: IOrderDirections | undefined;
    schoolCoopId?: IOrderDirections | undefined;
    schoolCoopName?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

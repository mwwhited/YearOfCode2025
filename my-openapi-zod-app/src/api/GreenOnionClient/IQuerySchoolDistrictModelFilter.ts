//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModelFilter } from "./ZQuerySchoolDistrictModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQuerySchoolDistrictModelFilter {
    $schema: typeof ZQuerySchoolDistrictModelFilter;

    schoolDistrictId?: IFilterParameter | undefined;
    siteCode?: IFilterParameter | undefined;
    districtName?: IFilterParameter | undefined;
    phoneNumber?: IFilterParameter | undefined;
    email?: IFilterParameter | undefined;
    country?: IFilterParameter | undefined;
    stateId?: IFilterParameter | undefined;
    state?: IFilterParameter | undefined;
    city?: IFilterParameter | undefined;
    districtLogo?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    foodServiceOptions?: IFilterParameter | undefined;
    contractCompany?: IFilterParameter | undefined;
    isSchoolCoopMember?: IFilterParameter | undefined;
    isSchoolCoop?: IFilterParameter | undefined;
    schoolCoopId?: IFilterParameter | undefined;
    schoolCoopName?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

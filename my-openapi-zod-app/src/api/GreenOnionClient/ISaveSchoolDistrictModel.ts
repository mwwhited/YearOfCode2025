//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveSchoolDistrictModel } from "./ZSaveSchoolDistrictModel";

type integer = number;

export interface ISaveSchoolDistrictModel {
    $schema: typeof ZSaveSchoolDistrictModel;

    schoolDistrictId?: integer | undefined;
    siteCode?: string | undefined;
    districtName?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    country?: string | undefined;
    state?: integer | undefined;
    city?: string | undefined;
    districtLogo?: string | undefined;
    isActive?: boolean | undefined;
    foodServiceOptions?: string | undefined;
    contractCompany?: string | undefined;
    isSchoolCoop?: boolean | undefined;
    schoolCoopId?: integer | undefined;

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelFilter } from "./ZQueryMonthlyNumberModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryMonthlyNumberModelFilter {
    $schema: typeof ZQueryMonthlyNumberModelFilter;

    id?: IFilterParameter | undefined;
    schoolDistrictId?: IFilterParameter | undefined;
    monthId?: IFilterParameter | undefined;
    actualMonthId?: IFilterParameter | undefined;
    year?: IFilterParameter | undefined;
    enrollment?: IFilterParameter | undefined;
    numberOfSites?: IFilterParameter | undefined;
    numberOfDistricts?: IFilterParameter | undefined;
    mealsServed?: IFilterParameter | undefined;
    freeAndReducedPercent?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    regDate?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelOrderBy } from "./ZQueryMonthlyNumberModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryMonthlyNumberModelOrderBy {
    $schema: typeof ZQueryMonthlyNumberModelOrderBy;

    id?: IOrderDirections | undefined;
    schoolDistrictId?: IOrderDirections | undefined;
    monthId?: IOrderDirections | undefined;
    actualMonthId?: IOrderDirections | undefined;
    year?: IOrderDirections | undefined;
    enrollment?: IOrderDirections | undefined;
    numberOfSites?: IOrderDirections | undefined;
    numberOfDistricts?: IOrderDirections | undefined;
    mealsServed?: IOrderDirections | undefined;
    freeAndReducedPercent?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    regDate?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

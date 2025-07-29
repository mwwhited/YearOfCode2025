//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";
import ZOrderDirections from "./ZOrderDirections";

const ZQueryMonthlyNumberModelOrderBy = z.object({
    id: ZOrderDirections.nullish(),
    schoolDistrictId: ZOrderDirections.nullish(),
    monthId: ZOrderDirections.nullish(),
    actualMonthId: ZOrderDirections.nullish(),
    year: ZOrderDirections.nullish(),
    enrollment: ZOrderDirections.nullish(),
    numberOfSites: ZOrderDirections.nullish(),
    numberOfDistricts: ZOrderDirections.nullish(),
    mealsServed: ZOrderDirections.nullish(),
    freeAndReducedPercent: ZOrderDirections.nullish(),
    isActive: ZOrderDirections.nullish(),
    regDate: ZOrderDirections.nullish(),
    createdOn: ZOrderDirections.nullish(),
    createdById: ZOrderDirections.nullish(),
    createdBy: ZOrderDirections.nullish(),
    updatedOn: ZOrderDirections.nullish(),
    updatedById: ZOrderDirections.nullish(),
    updatedBy: ZOrderDirections.nullish(),
});

export default ZQueryMonthlyNumberModelOrderBy;
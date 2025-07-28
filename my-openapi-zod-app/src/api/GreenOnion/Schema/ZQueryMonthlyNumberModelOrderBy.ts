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
    id: ZOrderDirections.optional(),
    schoolDistrictId: ZOrderDirections.optional(),
    monthId: ZOrderDirections.optional(),
    actualMonthId: ZOrderDirections.optional(),
    year: ZOrderDirections.optional(),
    enrollment: ZOrderDirections.optional(),
    numberOfSites: ZOrderDirections.optional(),
    numberOfDistricts: ZOrderDirections.optional(),
    mealsServed: ZOrderDirections.optional(),
    freeAndReducedPercent: ZOrderDirections.optional(),
    isActive: ZOrderDirections.optional(),
    regDate: ZOrderDirections.optional(),
    createdOn: ZOrderDirections.optional(),
    createdById: ZOrderDirections.optional(),
    createdBy: ZOrderDirections.optional(),
    updatedOn: ZOrderDirections.optional(),
    updatedById: ZOrderDirections.optional(),
    updatedBy: ZOrderDirections.optional(),
});

export default ZQueryMonthlyNumberModelOrderBy;
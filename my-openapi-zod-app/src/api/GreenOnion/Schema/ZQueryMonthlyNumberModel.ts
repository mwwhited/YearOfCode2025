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

const ZQueryMonthlyNumberModel = z.object({
    id: z.number().int().nullish(),
    schoolDistrictId: z.number().int().nullish(),
    monthId: z.number().int().nullish(),
    actualMonthId: z.number().int().nullish(),
    year: z.string().nullish(),
    enrollment: z.number().int().nullish(),
    numberOfSites: z.number().int().nullish(),
    numberOfDistricts: z.number().int().nullish(),
    mealsServed: z.number().int().nullish(),
    freeAndReducedPercent: z.number().int().nullish(),
    isActive: z.boolean().nullish(),
    regDate: z.string().nullish(),
    createdOn: z.string().nullish(),
    createdById: z.number().int().nullish(),
    createdBy: z.string().nullish(),
    updatedOn: z.string().nullish(),
    updatedById: z.number().int().nullish(),
    updatedBy: z.string().nullish(),
});

export default ZQueryMonthlyNumberModel;
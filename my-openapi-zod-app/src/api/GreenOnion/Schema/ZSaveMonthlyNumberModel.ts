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

const ZSaveMonthlyNumberModel = z.object({
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
});

export default ZSaveMonthlyNumberModel;
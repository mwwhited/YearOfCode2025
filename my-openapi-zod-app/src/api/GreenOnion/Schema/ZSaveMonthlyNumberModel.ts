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
    id: z.number().int().nullish().meta({}),  
    schoolDistrictId: z.number().int().nullish().meta({}),  
    monthId: z.number().int().nullish().meta({}),  
    actualMonthId: z.number().int().nullish().meta({}),  
    year: z.string().nullish().meta({}),  
    enrollment: z.number().int().nullish().meta({}),  
    numberOfSites: z.number().int().nullish().meta({}),  
    numberOfDistricts: z.number().int().nullish().meta({}),  
    mealsServed: z.number().int().nullish().meta({}),  
    freeAndReducedPercent: z.number().int().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
});

export default ZSaveMonthlyNumberModel;
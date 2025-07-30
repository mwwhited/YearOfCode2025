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
    id: z.number().int().meta({}).nullish(),  
    schoolDistrictId: z.number().int().meta({}).nullish(),  
    monthId: z.number().int().meta({}).nullish(),  
    actualMonthId: z.number().int().meta({}).nullish(),  
    year: z.string().meta({}).nullish(),  
    enrollment: z.number().int().meta({}).nullish(),  
    numberOfSites: z.number().int().meta({}).nullish(),  
    numberOfDistricts: z.number().int().meta({}).nullish(),  
    mealsServed: z.number().int().meta({}).nullish(),  
    freeAndReducedPercent: z.number().int().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
});

export default ZSaveMonthlyNumberModel;
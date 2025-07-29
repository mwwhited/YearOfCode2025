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

const ZSaveManufacturerModel = z.object({
    manufacturerId: z.number().int().nullish(),
    manufacturerName: z.string().nullish(),
    glnNumber: z.string().nullish(),
    isActive: z.boolean().nullish(),
});

export default ZSaveManufacturerModel;
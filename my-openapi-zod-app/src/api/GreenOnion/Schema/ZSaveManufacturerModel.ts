//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZSaveManufacturerModel = z.object({
    manufacturerId: z.number().int().optional(),
    manufacturerName: z.string().optional(),
    glnNumber: z.string().optional(),
    isActive: z.boolean().optional(),
});

export default ZSaveManufacturerModel;
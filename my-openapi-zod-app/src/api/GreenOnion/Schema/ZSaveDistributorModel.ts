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

const ZSaveDistributorModel = z.object({
    distributorId: z.number().int().nullish(),
    distributorName: z.string().nullish(),
    distributorCode: z.string().nullish(),
    isActive: z.boolean().nullish(),
});

export default ZSaveDistributorModel;
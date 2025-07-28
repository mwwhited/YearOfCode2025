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

const ZQueryDistributorModel = z.object({
    distributorId: z.number().int().optional(),
    distributorName: z.string().optional(),
    distributorCode: z.string().optional(),
    isActive: z.boolean().optional(),
    createdOn: z.string().optional(),
    createdById: z.number().int().optional(),
    createdBy: z.string().optional(),
    updatedOn: z.string().optional(),
    updatedById: z.number().int().optional(),
    updatedBy: z.string().optional(),
});

export default ZQueryDistributorModel;
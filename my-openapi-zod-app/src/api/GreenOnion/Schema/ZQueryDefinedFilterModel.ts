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

const ZQueryDefinedFilterModel = z.object({
    definedFilterId: z.number().int().nullish(),
    createById: z.number().int().nullish(),
    updatedOn: z.string().nullish(),
    updatedById: z.number().int().nullish(),
    updatedBy: z.string().nullish(),
    createBy: z.string().nullish(),
    path: z.string().nullish(),
    name: z.string().nullish(),
    isActive: z.boolean().nullish(),
    createdOn: z.string().nullish(),
    state: z.string().nullish(),
});

export default ZQueryDefinedFilterModel;
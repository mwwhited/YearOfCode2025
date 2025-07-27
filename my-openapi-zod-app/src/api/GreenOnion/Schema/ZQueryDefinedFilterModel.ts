//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZQueryDefinedFilterModel = z.object({
    definedFilterId:z.number().int().optional(),
    createById:z.number().int().optional(),
    updatedOn:z.string().optional(),
    updatedById:z.number().int().optional(),
    updatedBy:z.string().optional(),
    createBy:z.string().optional(),
    path:z.string().optional(),
    name:z.string().optional(),
    isActive:z.boolean().optional(),
    createdOn:z.string().optional(),
    state:z.string().optional(),
});

export default ZQueryDefinedFilterModel;
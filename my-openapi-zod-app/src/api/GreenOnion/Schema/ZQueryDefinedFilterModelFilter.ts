//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZFilterParameter from "./ZFilterParameter";

const ZQueryDefinedFilterModelFilter = z.object({
    definedFilterId: ZFilterParameter.optional(),
    createById: ZFilterParameter.optional(),
    updatedOn: ZFilterParameter.optional(),
    updatedById: ZFilterParameter.optional(),
    updatedBy: ZFilterParameter.optional(),
    createBy: ZFilterParameter.optional(),
    path: ZFilterParameter.optional(),
    name: ZFilterParameter.optional(),
    isActive: ZFilterParameter.optional(),
    createdOn: ZFilterParameter.optional(),
    state: ZFilterParameter.optional(),
});

export default ZQueryDefinedFilterModelFilter;
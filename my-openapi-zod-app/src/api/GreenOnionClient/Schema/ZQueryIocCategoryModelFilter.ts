//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryIocCategoryModelFilter = z.object({
    iocCategoryId:ZFilterParameter.optional(),
    name:ZFilterParameter.optional(),
    color:ZFilterParameter.optional(),
});

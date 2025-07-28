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

const ZQueryErrorLogModelFilter = z.object({
    errorLogId: ZFilterParameter.optional(),
    errorMessage: ZFilterParameter.optional(),
    errorPath: ZFilterParameter.optional(),
});

export default ZQueryErrorLogModelFilter;
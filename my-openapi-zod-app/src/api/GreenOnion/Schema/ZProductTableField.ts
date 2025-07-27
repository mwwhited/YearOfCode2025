//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZProductTableField = z.object({
    fieldID:z.number().int().optional(),
    fieldName:z.string().optional(),
});

export default ZProductTableField;
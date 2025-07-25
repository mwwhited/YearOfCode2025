//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZMappingFieldData = z.object({
    mappingID:z.number().int().optional(),
    isChecked:z.boolean().optional(),
    fileFieldName:z.string().optional(),
    tableFieldID:z.string().optional(),
    tableFieldName:z.string().optional(),
});


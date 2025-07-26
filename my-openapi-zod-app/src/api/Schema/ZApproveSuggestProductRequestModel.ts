//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";

export const ZApproveSuggestProductRequestModel = z.object({
    productId:z.number().int().optional(),
    suggestedProductId:z.number().int().optional(),
});

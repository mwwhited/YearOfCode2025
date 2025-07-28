//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZSuggestedProductRequestModel = z.object({
    suggestionId: z.number().int().optional(),
    productId: z.number().int().optional(),
    suggestedProductId: z.number().int().optional(),
    suggestionDate: z.string().optional(),
    suggestedByUserId: z.number().int().optional(),
    isActive: z.boolean().optional(),
    suggestedByDistrictId: z.number().int().optional(),
});

export default ZSuggestedProductRequestModel;
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

const ZSuggestedProductRequestModel = z.object({
    suggestionId: z.number().int().nullish(),
    productId: z.number().int().nullish(),
    suggestedProductId: z.number().int().nullish(),
    suggestionDate: z.string().nullish(),
    suggestedByUserId: z.number().int().nullish(),
    isActive: z.boolean().nullish(),
    suggestedByDistrictId: z.number().int().nullish(),
});

export default ZSuggestedProductRequestModel;
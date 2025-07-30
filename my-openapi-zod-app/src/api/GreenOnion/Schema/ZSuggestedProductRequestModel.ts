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
    suggestionId: z.number().int().meta({}).nullish(),  
    productId: z.number().int().meta({}).nullish(),  
    suggestedProductId: z.number().int().meta({}).nullish(),  
    suggestionDate: z.string().meta({}).nullish(),  
    suggestedByUserId: z.number().int().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    suggestedByDistrictId: z.number().int().meta({}).nullish(),  
});

export default ZSuggestedProductRequestModel;
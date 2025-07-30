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

const ZSuggestedProductResponseModel = z.object({
    success: z.boolean().nullish().meta({}),  
    message: z.string().nullish().meta({}),  
    totalRecords: z.number().int().nullish().meta({}),  
    payload: z.any().nullish().meta({}),  
    isUpdate: z.boolean().nullish().meta({}),  
    isAdded: z.boolean().nullish().meta({}),  
    isDelete: z.boolean().nullish().meta({}),  
});

export default ZSuggestedProductResponseModel;
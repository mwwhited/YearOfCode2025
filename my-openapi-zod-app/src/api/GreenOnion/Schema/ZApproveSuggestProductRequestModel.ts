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

const ZApproveSuggestProductRequestModel = z.object({
    productId: z.number().int().meta({}).nullish(),  
    suggestedProductId: z.number().int().meta({}).nullish(),  
});

export default ZApproveSuggestProductRequestModel;
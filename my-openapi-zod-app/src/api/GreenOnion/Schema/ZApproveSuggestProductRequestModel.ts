//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZApproveSuggestProductRequestModel = z.object({
    productId: z.number().int().optional(),
    suggestedProductId: z.number().int().optional(),
});

export default ZApproveSuggestProductRequestModel;
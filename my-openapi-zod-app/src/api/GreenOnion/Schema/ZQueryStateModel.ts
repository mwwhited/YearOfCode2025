//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZQueryStateModel = z.object({
    stateId: z.number().int().optional(),
    stateName: z.string().optional(),
});

export default ZQueryStateModel;
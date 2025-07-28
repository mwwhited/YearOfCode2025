//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZProductCheck = z.object({
    ischeck: z.boolean().optional(),
    headerName: z.string().optional(),
    headerValue: z.string().optional(),
});

export default ZProductCheck;
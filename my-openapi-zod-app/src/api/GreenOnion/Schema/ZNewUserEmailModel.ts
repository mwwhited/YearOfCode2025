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

const ZNewUserEmailModel = z.object({
    firstName: z.string().nullish().meta({}),  
    lastName: z.string().nullish().meta({}),  
    role: z.string().nullish().meta({}),  
    email: z.string().nullish().meta({}),  
    association: z.string().nullish().meta({}),  
});

export default ZNewUserEmailModel;
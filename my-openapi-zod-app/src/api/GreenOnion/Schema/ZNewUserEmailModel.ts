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
    firstName: z.string().meta({}).nullish(),  
    lastName: z.string().meta({}).nullish(),  
    role: z.string().meta({}).nullish(),  
    email: z.string().meta({}).nullish(),  
    association: z.string().meta({}).nullish(),  
});

export default ZNewUserEmailModel;
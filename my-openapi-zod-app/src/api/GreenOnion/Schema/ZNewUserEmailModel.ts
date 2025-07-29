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
    firstName: z.string().nullish(),
    lastName: z.string().nullish(),
    role: z.string().nullish(),
    email: z.string().nullish(),
    association: z.string().nullish(),
});

export default ZNewUserEmailModel;
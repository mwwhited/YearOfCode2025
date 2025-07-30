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

const ZQueryStateModel = z.object({
    stateId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    stateName: z.string().meta({}).nullish(),  
});

export default ZQueryStateModel;
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
import ZFilterParameter from "./ZFilterParameter";

const ZQueryAllergenModelFilter = z.object({
    allergenId: ZFilterParameter.nullish(),  
    allergenName: ZFilterParameter.nullish(),  
    allergenGroup: ZFilterParameter.nullish(),  
});

export default ZQueryAllergenModelFilter;
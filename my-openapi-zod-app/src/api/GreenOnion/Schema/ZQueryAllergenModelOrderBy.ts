//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";
import ZOrderDirections from "./ZOrderDirections";

const ZQueryAllergenModelOrderBy = z.object({
    allergenId: ZOrderDirections.optional(),
    allergenName: ZOrderDirections.optional(),
    allergenGroup: ZOrderDirections.optional(),
});

export default ZQueryAllergenModelOrderBy;
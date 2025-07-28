//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";
import ZFilterParameter from "./ZFilterParameter";

const ZQueryStateModelFilter = z.object({
    stateId: ZFilterParameter.optional(),
    stateName: ZFilterParameter.optional(),
});

export default ZQueryStateModelFilter;
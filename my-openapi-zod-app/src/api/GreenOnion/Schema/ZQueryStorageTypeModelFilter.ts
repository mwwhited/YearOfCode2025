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

const ZQueryStorageTypeModelFilter = z.object({
    storageTypeId: ZFilterParameter.optional(),
    storageTypeName: ZFilterParameter.optional(),
});

export default ZQueryStorageTypeModelFilter;
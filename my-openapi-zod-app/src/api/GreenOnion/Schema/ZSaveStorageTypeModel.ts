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

const ZSaveStorageTypeModel = z.object({
    storageTypeId: z.number().int().nullish().meta({}),  
    storageTypeName: z.string().nullish().meta({}),  
});

export default ZSaveStorageTypeModel;
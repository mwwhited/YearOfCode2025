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

const ZMappingFieldData = z.object({
    mappingID: z.number().int().nullish(),
    isChecked: z.boolean().nullish(),
    fileFieldName: z.string().nullish(),
    tableFieldID: z.string().nullish(),
    tableFieldName: z.string().nullish(),
});

export default ZMappingFieldData;
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
    mappingID: z.number().int().nullish().meta({}),  
    isChecked: z.boolean().nullish().meta({}),  
    fileFieldName: z.string().nullish().meta({}),  
    tableFieldID: z.string().nullish().meta({}),  
    tableFieldName: z.string().nullish().meta({}),  
});

export default ZMappingFieldData;
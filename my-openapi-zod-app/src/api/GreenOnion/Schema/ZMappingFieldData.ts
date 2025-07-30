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
    mappingID: z.number().int().meta({}).nullish(),  
    isChecked: z.boolean().meta({}).nullish(),  
    fileFieldName: z.string().meta({}).nullish(),  
    tableFieldID: z.string().meta({}).nullish(),  
    tableFieldName: z.string().meta({}).nullish(),  
});

export default ZMappingFieldData;
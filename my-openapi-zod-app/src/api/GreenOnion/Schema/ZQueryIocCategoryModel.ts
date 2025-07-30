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

const ZQueryIocCategoryModel = z.object({
    iocCategoryId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    name: z.string().meta({}).nullish(),  
    color: z.string().meta({}).nullish(),  
});

export default ZQueryIocCategoryModel;
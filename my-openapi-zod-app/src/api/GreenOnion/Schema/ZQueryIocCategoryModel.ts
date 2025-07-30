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
    iocCategoryId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    name: z.string().nullish().meta({}),  
    color: z.string().nullish().meta({}),  
});

export default ZQueryIocCategoryModel;
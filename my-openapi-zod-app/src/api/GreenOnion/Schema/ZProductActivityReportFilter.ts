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

const ZProductActivityReportFilter = z.object({
    pageNumber: z.number().int().nullish().meta({}),  
    pageSize: z.number().int().nullish().meta({}),  
    schoolDistrictId: z.number().int().nullish().meta({}),  
    iocCategoryId: z.number().int().nullish().meta({}),  
    userId: z.number().int().nullish().meta({}),  
    productId: z.number().int().nullish().meta({}),  
    gtin: z.string().nullish().meta({}),  
    upc: z.string().nullish().meta({}),  
    startDate: z.string().nullish().meta({}),  
    endDate: z.string().nullish().meta({}),  
    productGtinId: z.number().int().nullish().meta({}),  
    productUpcId: z.number().int().nullish().meta({}),  
    cooperative: z.string().nullish().meta({}),  
    manufactureId: z.number().int().nullish().meta({}),  
});

export default ZProductActivityReportFilter;
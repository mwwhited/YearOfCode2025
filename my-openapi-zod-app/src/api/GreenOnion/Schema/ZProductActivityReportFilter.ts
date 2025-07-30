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
    pageNumber: z.number().int().meta({}).nullish(),  
    pageSize: z.number().int().meta({}).nullish(),  
    schoolDistrictId: z.number().int().meta({}).nullish(),  
    iocCategoryId: z.number().int().meta({}).nullish(),  
    userId: z.number().int().meta({}).nullish(),  
    productId: z.number().int().meta({}).nullish(),  
    gtin: z.string().meta({}).nullish(),  
    upc: z.string().meta({}).nullish(),  
    startDate: z.string().meta({}).nullish(),  
    endDate: z.string().meta({}).nullish(),  
    productGtinId: z.number().int().meta({}).nullish(),  
    productUpcId: z.number().int().meta({}).nullish(),  
    cooperative: z.string().meta({}).nullish(),  
    manufactureId: z.number().int().meta({}).nullish(),  
});

export default ZProductActivityReportFilter;
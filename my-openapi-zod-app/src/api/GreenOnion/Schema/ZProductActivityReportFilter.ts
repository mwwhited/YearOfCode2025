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
    pageNumber: z.number().int().nullish(),
    pageSize: z.number().int().nullish(),
    schoolDistrictId: z.number().int().nullish(),
    iocCategoryId: z.number().int().nullish(),
    userId: z.number().int().nullish(),
    productId: z.number().int().nullish(),
    gtin: z.string().nullish(),
    upc: z.string().nullish(),
    startDate: z.string().nullish(),
    endDate: z.string().nullish(),
    productGtinId: z.number().int().nullish(),
    productUpcId: z.number().int().nullish(),
    cooperative: z.string().nullish(),
    manufactureId: z.number().int().nullish(),
});

export default ZProductActivityReportFilter;
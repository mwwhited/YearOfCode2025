//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZProductActivityReportFilter = z.object({
    pageNumber: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    schoolDistrictId: z.number().int().optional(),
    iocCategoryId: z.number().int().optional(),
    userId: z.number().int().optional(),
    productId: z.number().int().optional(),
    gtin: z.string().optional(),
    upc: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    productGtinId: z.number().int().optional(),
    productUpcId: z.number().int().optional(),
    cooperative: z.string().optional(),
    manufactureId: z.number().int().optional(),
});

export default ZProductActivityReportFilter;
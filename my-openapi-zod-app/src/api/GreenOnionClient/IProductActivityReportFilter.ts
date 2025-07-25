//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductActivityReportFilter } from "./ZProductActivityReportFilter";

type integer = number;

export interface IProductActivityReportFilter {
    $schema: typeof ZProductActivityReportFilter;

    pageNumber?: integer | undefined;
    pageSize?: integer | undefined;
    schoolDistrictId?: integer | undefined;
    iocCategoryId?: integer | undefined;
    userId?: integer | undefined;
    productId?: integer | undefined;
    gtin?: string | undefined;
    upc?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    productGtinId?: integer | undefined;
    productUpcId?: integer | undefined;
    cooperative?: string | undefined;
    manufactureId?: integer | undefined;

    toJSON(data?: any) : any;
}

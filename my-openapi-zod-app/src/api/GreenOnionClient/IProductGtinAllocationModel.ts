//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductGtinAllocationModel } from "./ZProductGtinAllocationModel";

type integer = number;

export interface IProductGtinAllocationModel {
    $schema: typeof ZProductGtinAllocationModel;

    productId?: integer | undefined;
    gtin?: string | undefined;
    isActive?: boolean | undefined;
    createdBy?: integer | undefined;

    toJSON(data?: any) : any;
}

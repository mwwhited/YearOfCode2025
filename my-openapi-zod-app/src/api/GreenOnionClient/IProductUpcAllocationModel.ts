//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductUpcAllocationModel } from "./ZProductUpcAllocationModel";

type integer = number;

export interface IProductUpcAllocationModel {
    $schema: typeof ZProductUpcAllocationModel;

    productId?: integer | undefined; 
    upc?: string | undefined; 
    isActive?: boolean | undefined; 
    createdBy?: integer | undefined; 

    toJSON(data?: any) : any;
}

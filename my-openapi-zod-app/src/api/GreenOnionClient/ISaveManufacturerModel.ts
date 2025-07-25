//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveManufacturerModel } from "./ZSaveManufacturerModel";

type integer = number;

export interface ISaveManufacturerModel {
    $schema: typeof ZSaveManufacturerModel;

    manufacturerId?: integer | undefined; 
    manufacturerName?: string | undefined; 
    glnNumber?: string | undefined; 
    isActive?: boolean | undefined; 

    toJSON(data?: any) : any;
}

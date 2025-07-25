//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveDistributorModel } from "./ZSaveDistributorModel";

type integer = number;

export interface ISaveDistributorModel {
    $schema: typeof ZSaveDistributorModel;

    distributorId?: integer | undefined; 
    distributorName?: string | undefined; 
    distributorCode?: string | undefined; 
    isActive?: boolean | undefined; 

    toJSON(data?: any) : any;
}

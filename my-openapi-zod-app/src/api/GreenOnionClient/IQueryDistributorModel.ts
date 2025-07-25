//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDistributorModel } from "./ZQueryDistributorModel";

type integer = number;

export interface IQueryDistributorModel {
    $schema: typeof ZQueryDistributorModel;

    distributorId?: integer | undefined; 
    distributorName?: string | undefined; 
    distributorCode?: string | undefined; 
    isActive?: boolean | undefined; 
    createdOn?: string | undefined; 
    createdById?: integer | undefined; 
    createdBy?: string | undefined; 
    updatedOn?: string | undefined; 
    updatedById?: integer | undefined; 
    updatedBy?: string | undefined; 

    toJSON(data?: any) : any;
}

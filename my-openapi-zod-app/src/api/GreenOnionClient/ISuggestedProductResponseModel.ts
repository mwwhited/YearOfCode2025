//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSuggestedProductResponseModel } from "./ZSuggestedProductResponseModel";

type integer = number;

export interface ISuggestedProductResponseModel {
    $schema: typeof ZSuggestedProductResponseModel;

    success?: boolean | undefined; 
    message?: string | undefined; 
    totalRecords?: integer | undefined; 
    payload?: any | undefined; 
    isUpdate?: boolean | undefined; 
    isAdded?: boolean | undefined; 
    isDelete?: boolean | undefined; 

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSuggestedProductRequestModel } from "./ZSuggestedProductRequestModel";

type integer = number;

export interface ISuggestedProductRequestModel {
    $schema: typeof ZSuggestedProductRequestModel;

    suggestionId?: integer | undefined; 
    productId?: integer | undefined; 
    suggestedProductId?: integer | undefined; 
    suggestionDate?: string | undefined; 
    suggestedByUserId?: integer | undefined; 
    isActive?: boolean | undefined; 
    suggestedByDistrictId?: integer | undefined; 

    toJSON(data?: any) : any;
}

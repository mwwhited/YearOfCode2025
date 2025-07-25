//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZApproveSuggestProductRequestModel } from "./ZApproveSuggestProductRequestModel";

type integer = number;

export interface IApproveSuggestProductRequestModel {
    $schema: typeof ZApproveSuggestProductRequestModel;

    productId?: integer | undefined; 
    suggestedProductId?: integer | undefined; 

    toJSON(data?: any) : any;
}

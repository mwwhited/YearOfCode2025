//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductCheck } from "./ZProductCheck";

type integer = number;

export interface IProductCheck {
    $schema: typeof ZProductCheck;

    ischeck?: boolean | undefined; 
    headerName?: string | undefined; 
    headerValue?: string | undefined; 

    toJSON(data?: any) : any;
}

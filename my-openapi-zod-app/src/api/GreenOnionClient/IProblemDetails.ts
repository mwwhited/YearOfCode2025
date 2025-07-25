//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProblemDetails } from "./ZProblemDetails";

type integer = number;

export interface IProblemDetails {
    $schema: typeof ZProblemDetails;

    type?: string | undefined;
    title?: string | undefined;
    status?: integer | undefined;
    detail?: string | undefined;
    instance?: string | undefined;
    [key: string]: unknown; // Additional properties are allowed

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZBaseResponseModel } from "./ZBaseResponseModel";

type integer = number;

export interface IBaseResponseModel {
    $schema: typeof ZBaseResponseModel;

    success?: boolean | undefined;
    message?: string | undefined;
    totalRecords?: integer | undefined;
    payload?: unknown | undefined;

    toJSON(data?: any) : any;
}

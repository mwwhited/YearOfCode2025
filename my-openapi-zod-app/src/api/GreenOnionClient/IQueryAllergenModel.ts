//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryAllergenModel } from "./ZQueryAllergenModel";

type integer = number;

export interface IQueryAllergenModel {
    $schema: typeof ZQueryAllergenModel;

    allergenId?: integer | undefined;
    allergenName?: string | undefined;
    allergenGroup?: string | undefined;

    toJSON(data?: any) : any;
}

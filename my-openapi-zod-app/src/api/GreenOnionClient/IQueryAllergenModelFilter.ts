//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryAllergenModelFilter } from "./ZQueryAllergenModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryAllergenModelFilter {
    $schema: typeof ZQueryAllergenModelFilter;

    allergenId?: IFilterParameter | undefined;
    allergenName?: IFilterParameter | undefined;
    allergenGroup?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

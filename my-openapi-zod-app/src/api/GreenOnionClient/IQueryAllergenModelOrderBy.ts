//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryAllergenModelOrderBy } from "./ZQueryAllergenModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryAllergenModelOrderBy {
    $schema: typeof ZQueryAllergenModelOrderBy;

    allergenId?: IOrderDirections | undefined;
    allergenName?: IOrderDirections | undefined;
    allergenGroup?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

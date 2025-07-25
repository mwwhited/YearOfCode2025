//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIngredientModelOrderBy } from "./ZQueryIngredientModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryIngredientModelOrderBy {
    $schema: typeof ZQueryIngredientModelOrderBy;

    ingredientId?: IOrderDirections | undefined;
    ingredientName?: IOrderDirections | undefined;
    group?: IOrderDirections | undefined;
    iocGroup?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

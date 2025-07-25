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

    ingredientId?: any | undefined; 
    ingredientName?: any | undefined; 
    group?: any | undefined; 
    iocGroup?: any | undefined; 

    toJSON(data?: any) : any;
}

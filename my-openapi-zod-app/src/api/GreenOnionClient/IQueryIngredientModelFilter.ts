//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIngredientModelFilter } from "./ZQueryIngredientModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryIngredientModelFilter {
    $schema: typeof ZQueryIngredientModelFilter;

    ingredientId?: IFilterParameter | undefined;
    ingredientName?: IFilterParameter | undefined;
    group?: IFilterParameter | undefined;
    iocGroup?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

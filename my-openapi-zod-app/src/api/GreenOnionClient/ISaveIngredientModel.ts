//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveIngredientModel } from "./ZSaveIngredientModel";

type integer = number;

export interface ISaveIngredientModel {
    $schema: typeof ZSaveIngredientModel;

    ingredientId?: integer | undefined; 
    ingredientName?: string | undefined; 
    group?: string | undefined; 
    iocGroup?: string | undefined; 

    toJSON(data?: any) : any;
}

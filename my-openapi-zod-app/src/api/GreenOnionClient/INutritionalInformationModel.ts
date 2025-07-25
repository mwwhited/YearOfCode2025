//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZNutritionalInformationModel } from "./ZNutritionalInformationModel";

type integer = number;

export interface INutritionalInformationModel {
    $schema: typeof ZNutritionalInformationModel;

    serving?: number | undefined; 
    servingUom?: string | undefined; 
    calories?: number | undefined; 
    caloriesUom?: string | undefined; 
    carbohydrates?: number | undefined; 
    carbohydratesUom?: string | undefined; 
    protein?: number | undefined; 
    proteinUom?: string | undefined; 
    totalFat?: number | undefined; 
    transFat?: number | undefined; 
    saturatedFat?: number | undefined; 
    dietaryFiber?: number | undefined; 
    dietaryFiberUom?: string | undefined; 
    sugar?: number | undefined; 
    sugarUom?: string | undefined; 
    addedSugar?: number | undefined; 
    addedSugarUom?: string | undefined; 
    sodium?: number | undefined; 
    sodiumUom?: string | undefined; 
    cholesterol?: number | undefined; 
    cholesterolUom?: string | undefined; 

    toJSON(data?: any) : any;
}

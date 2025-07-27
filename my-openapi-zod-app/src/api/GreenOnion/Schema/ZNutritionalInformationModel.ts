//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZNutritionalInformationModel = z.object({
    serving:z.number().optional(),
    servingUom:z.string().optional(),
    calories:z.number().optional(),
    caloriesUom:z.string().optional(),
    carbohydrates:z.number().optional(),
    carbohydratesUom:z.string().optional(),
    protein:z.number().optional(),
    proteinUom:z.string().optional(),
    totalFat:z.number().optional(),
    transFat:z.number().optional(),
    saturatedFat:z.number().optional(),
    dietaryFiber:z.number().optional(),
    dietaryFiberUom:z.string().optional(),
    sugar:z.number().optional(),
    sugarUom:z.string().optional(),
    addedSugar:z.number().optional(),
    addedSugarUom:z.string().optional(),
    sodium:z.number().optional(),
    sodiumUom:z.string().optional(),
    cholesterol:z.number().optional(),
    cholesterolUom:z.string().optional(),
});

export default ZNutritionalInformationModel;
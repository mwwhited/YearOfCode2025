//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";

const ZNutritionalInformationModel = z.object({
    serving: z.number().nullish().meta({}),  
    servingUom: z.string().nullish().meta({}),  
    calories: z.number().nullish().meta({}),  
    caloriesUom: z.string().nullish().meta({}),  
    carbohydrates: z.number().nullish().meta({}),  
    carbohydratesUom: z.string().nullish().meta({}),  
    protein: z.number().nullish().meta({}),  
    proteinUom: z.string().nullish().meta({}),  
    totalFat: z.number().nullish().meta({}),  
    transFat: z.number().nullish().meta({}),  
    saturatedFat: z.number().nullish().meta({}),  
    dietaryFiber: z.number().nullish().meta({}),  
    dietaryFiberUom: z.string().nullish().meta({}),  
    sugar: z.number().nullish().meta({}),  
    sugarUom: z.string().nullish().meta({}),  
    addedSugar: z.number().nullish().meta({}),  
    addedSugarUom: z.string().nullish().meta({}),  
    sodium: z.number().nullish().meta({}),  
    sodiumUom: z.string().nullish().meta({}),  
    cholesterol: z.number().nullish().meta({}),  
    cholesterolUom: z.string().nullish().meta({}),  
});

export default ZNutritionalInformationModel;
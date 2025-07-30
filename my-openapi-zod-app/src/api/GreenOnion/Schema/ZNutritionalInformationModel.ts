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
    serving: z.number().meta({}).nullish(),  
    servingUom: z.string().meta({}).nullish(),  
    calories: z.number().meta({}).nullish(),  
    caloriesUom: z.string().meta({}).nullish(),  
    carbohydrates: z.number().meta({}).nullish(),  
    carbohydratesUom: z.string().meta({}).nullish(),  
    protein: z.number().meta({}).nullish(),  
    proteinUom: z.string().meta({}).nullish(),  
    totalFat: z.number().meta({}).nullish(),  
    transFat: z.number().meta({}).nullish(),  
    saturatedFat: z.number().meta({}).nullish(),  
    dietaryFiber: z.number().meta({}).nullish(),  
    dietaryFiberUom: z.string().meta({}).nullish(),  
    sugar: z.number().meta({}).nullish(),  
    sugarUom: z.string().meta({}).nullish(),  
    addedSugar: z.number().meta({}).nullish(),  
    addedSugarUom: z.string().meta({}).nullish(),  
    sodium: z.number().meta({}).nullish(),  
    sodiumUom: z.string().meta({}).nullish(),  
    cholesterol: z.number().meta({}).nullish(),  
    cholesterolUom: z.string().meta({}).nullish(),  
});

export default ZNutritionalInformationModel;
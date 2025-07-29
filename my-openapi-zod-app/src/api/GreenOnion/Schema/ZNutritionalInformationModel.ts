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
    serving: z.number().nullish(),
    servingUom: z.string().nullish(),
    calories: z.number().nullish(),
    caloriesUom: z.string().nullish(),
    carbohydrates: z.number().nullish(),
    carbohydratesUom: z.string().nullish(),
    protein: z.number().nullish(),
    proteinUom: z.string().nullish(),
    totalFat: z.number().nullish(),
    transFat: z.number().nullish(),
    saturatedFat: z.number().nullish(),
    dietaryFiber: z.number().nullish(),
    dietaryFiberUom: z.string().nullish(),
    sugar: z.number().nullish(),
    sugarUom: z.string().nullish(),
    addedSugar: z.number().nullish(),
    addedSugarUom: z.string().nullish(),
    sodium: z.number().nullish(),
    sodiumUom: z.string().nullish(),
    cholesterol: z.number().nullish(),
    cholesterolUom: z.string().nullish(),
});

export default ZNutritionalInformationModel;
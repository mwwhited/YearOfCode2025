//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { INutritionalInformationModel } from "./INutritionalInformationModel";


export const ZNutritionalInformationModel: z.ZodType<INutritionalInformationModel> = z.object({
    serving: z.string(),
    servingUom: z.string(),
    calories: z.string(),
    caloriesUom: z.string(),
    carbohydrates: z.string(),
    carbohydratesUom: z.string(),
    protein: z.string(),
    proteinUom: z.string(),
    totalFat: z.string(),
    transFat: z.string(),
    saturatedFat: z.string(),
    dietaryFiber: z.string(),
    dietaryFiberUom: z.string(),
    sugar: z.string(),
    sugarUom: z.string(),
    addedSugar: z.string(),
    addedSugarUom: z.string(),
    sodium: z.string(),
    sodiumUom: z.string(),
    cholesterol: z.string(),
    cholesterolUom: z.string(),
});
/*
[class, NutritionalInformationModel],[interface, INutritionalInformationModel],[schema, ZNutritionalInformationModel],[definition, {
        "type": "object",
        "properties": {
          "serving": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "servingUom": {
            "type": "string",
            "nullable": true
          },
          "calories": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "caloriesUom": {
            "type": "string",
            "nullable": true
          },
          "carbohydrates": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "carbohydratesUom": {
            "type": "string",
            "nullable": true
          },
          "protein": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "proteinUom": {
            "type": "string",
            "nullable": true
          },
          "totalFat": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "transFat": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "saturatedFat": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dietaryFiber": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dietaryFiberUom": {
            "type": "string",
            "nullable": true
          },
          "sugar": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "sugarUom": {
            "type": "string",
            "nullable": true
          },
          "addedSugar": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "addedSugarUom": {
            "type": "string",
            "nullable": true
          },
          "sodium": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "sodiumUom": {
            "type": "string",
            "nullable": true
          },
          "cholesterol": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "cholesterolUom": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/

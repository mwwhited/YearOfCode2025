//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductUploadModel } from "./ZProductUploadModel";

type integer = number;

export interface IProductUploadModel {
    $schema: typeof ZProductUploadModel;

    districtId?: integer | undefined;
    mrfcode?: string | undefined;
    idnumber?: integer | undefined;
    ingredients?: string | undefined;
    manufacturer?: string | undefined;
    brandName?: string | undefined;
    category?: integer | undefined;
    productName?: string | undefined;
    subCategory1?: integer | undefined;
    subCategory2?: integer | undefined;
    distributor?: string | undefined;
    serving?: string | undefined;
    totalCalories?: string | undefined;
    totalCarbohydrates?: string | undefined;
    sugars?: string | undefined;
    totalProtein?: string | undefined;
    addedSugars?: string | undefined;
    totalFat?: string | undefined;
    saturatedFat?: string | undefined;
    transFat?: string | undefined;
    cholesterol?: string | undefined;
    dietaryFiber?: string | undefined;
    sodium?: string | undefined;
    uploadPdf?: string | undefined;
    isActive?: boolean | undefined;
    createdon?: string | undefined;
    modifiedon?: string | undefined;
    createdby?: integer | undefined;
    modifiedby?: integer | undefined;
    districtName?: string | undefined;
    upcGtin?: string | undefined;
    allergens?: integer | undefined;
    image?: string | undefined;
    h7?: integer | undefined;
    reviewflag?: boolean | undefined;
    allergenKeyword?: string | undefined;
    allergenreviewflag?: boolean | undefined;
    productDescription?: string | undefined;
    vendor?: string | undefined;
    igGroup?: string | undefined;
    gtin?: string | undefined;
    upc?: string | undefined;
    manufacturerId?: integer | undefined;
    status?: boolean | undefined;
    statusMessage?: string | undefined;
    isMapping?: boolean | undefined;

    toJSON(data?: any) : any;
}

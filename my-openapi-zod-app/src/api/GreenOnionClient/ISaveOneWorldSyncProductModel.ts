//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveOneWorldSyncProductModel } from "./ZSaveOneWorldSyncProductModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";

type integer = number;

export interface ISaveOneWorldSyncProductModel {
    $schema: typeof ZSaveOneWorldSyncProductModel;

    productId?: integer | undefined; 
    productName?: string | undefined; 
    gtin?: string | undefined; 
    upc?: string | undefined; 
    brandName?: string | undefined; 
    ingredients?: string | undefined; 
    productDescription?: string | undefined; 
    vendor?: string | undefined; 
    manufacturerId?: integer | undefined; 
    storageTypeId?: integer | undefined; 
    categoryName?: string | undefined; 
    subCategory1Name?: string | undefined; 
    subCategory2Name?: string | undefined; 
    allergenKeyword?: string | undefined; 
    isActive?: boolean | undefined; 
    dataForm?: string | undefined; 
    nutritionalInformation?: any | undefined; 

    toJSON(data?: any) : any;
}

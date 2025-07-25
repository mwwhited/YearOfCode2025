//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveCategoryModel } from "./ZSaveCategoryModel";

type integer = number;

export interface ISaveCategoryModel {
    $schema: typeof ZSaveCategoryModel;

    categoryId?: integer | undefined; 
    categoryName?: string | undefined; 
    categoryCode?: string | undefined; 
    isActive?: boolean | undefined; 

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveSubCategoryModel } from "./ZSaveSubCategoryModel";

type integer = number;

export interface ISaveSubCategoryModel {
    $schema: typeof ZSaveSubCategoryModel;

    subCategoryId?: integer | undefined; 
    categoryId?: integer | undefined; 
    subCategoryName?: string | undefined; 
    subCategoryCode?: string | undefined; 
    isActive?: boolean | undefined; 

    toJSON(data?: any) : any;
}

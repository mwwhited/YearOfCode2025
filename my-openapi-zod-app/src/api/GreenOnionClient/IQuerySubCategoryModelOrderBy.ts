//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySubCategoryModelOrderBy } from "./ZQuerySubCategoryModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQuerySubCategoryModelOrderBy {
    $schema: typeof ZQuerySubCategoryModelOrderBy;

    subCategoryId?: any | undefined; 
    categoryId?: any | undefined; 
    subCategoryName?: any | undefined; 
    subCategoryCode?: any | undefined; 
    isActive?: any | undefined; 
    createdOn?: any | undefined; 
    createdById?: any | undefined; 
    createdBy?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 

    toJSON(data?: any) : any;
}

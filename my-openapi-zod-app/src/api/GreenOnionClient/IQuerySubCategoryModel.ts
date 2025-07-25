//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySubCategoryModel } from "./ZQuerySubCategoryModel";

type integer = number;

export interface IQuerySubCategoryModel {
    $schema: typeof ZQuerySubCategoryModel;

    subCategoryId?: integer | undefined;
    categoryId?: integer | undefined;
    subCategoryName?: string | undefined;
    subCategoryCode?: string | undefined;
    isActive?: boolean | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    toJSON(data?: any) : any;
}

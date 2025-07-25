//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySubCategoryModelFilter } from "./ZQuerySubCategoryModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQuerySubCategoryModelFilter {
    $schema: typeof ZQuerySubCategoryModelFilter;

    subCategoryId?: IFilterParameter | undefined;
    categoryId?: IFilterParameter | undefined;
    subCategoryName?: IFilterParameter | undefined;
    subCategoryCode?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

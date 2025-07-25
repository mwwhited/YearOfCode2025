//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIocCategoryModel } from "./ZQueryIocCategoryModel";

type integer = number;

export interface IQueryIocCategoryModel {
    $schema: typeof ZQueryIocCategoryModel;

    iocCategoryId?: integer | undefined; 
    name?: string | undefined; 
    color?: string | undefined; 

    toJSON(data?: any) : any;
}

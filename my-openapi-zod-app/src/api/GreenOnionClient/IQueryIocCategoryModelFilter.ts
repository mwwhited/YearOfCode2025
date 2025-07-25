//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIocCategoryModelFilter } from "./ZQueryIocCategoryModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryIocCategoryModelFilter {
    $schema: typeof ZQueryIocCategoryModelFilter;

    iocCategoryId?: IFilterParameter | undefined;
    name?: IFilterParameter | undefined;
    color?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

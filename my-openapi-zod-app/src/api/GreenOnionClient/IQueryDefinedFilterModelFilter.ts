//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDefinedFilterModelFilter } from "./ZQueryDefinedFilterModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryDefinedFilterModelFilter {
    $schema: typeof ZQueryDefinedFilterModelFilter;

    definedFilterId?: IFilterParameter | undefined;
    createById?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;
    createBy?: IFilterParameter | undefined;
    path?: IFilterParameter | undefined;
    name?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    state?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

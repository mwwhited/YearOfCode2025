//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDefinedFilterModel } from "./ZQueryDefinedFilterModel";

type integer = number;

export interface IQueryDefinedFilterModel {
    $schema: typeof ZQueryDefinedFilterModel;

    definedFilterId?: integer | undefined;
    createById?: integer | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;
    createBy?: string | undefined;
    path?: string | undefined;
    name?: string | undefined;
    isActive?: boolean | undefined;
    createdOn?: string | undefined;
    state?: string | undefined;

    toJSON(data?: any) : any;
}

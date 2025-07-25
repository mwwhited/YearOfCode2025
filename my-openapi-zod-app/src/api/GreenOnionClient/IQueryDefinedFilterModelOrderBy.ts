//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDefinedFilterModelOrderBy } from "./ZQueryDefinedFilterModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryDefinedFilterModelOrderBy {
    $schema: typeof ZQueryDefinedFilterModelOrderBy;

    definedFilterId?: IOrderDirections | undefined;
    createById?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;
    createBy?: IOrderDirections | undefined;
    path?: IOrderDirections | undefined;
    name?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    state?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

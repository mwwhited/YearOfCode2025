//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStateModelOrderBy } from "./ZQueryStateModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryStateModelOrderBy {
    $schema: typeof ZQueryStateModelOrderBy;

    stateId?: IOrderDirections | undefined;
    stateName?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

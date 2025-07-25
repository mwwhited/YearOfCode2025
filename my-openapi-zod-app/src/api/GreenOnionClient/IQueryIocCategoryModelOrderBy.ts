//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIocCategoryModelOrderBy } from "./ZQueryIocCategoryModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryIocCategoryModelOrderBy {
    $schema: typeof ZQueryIocCategoryModelOrderBy;

    iocCategoryId?: IOrderDirections | undefined;
    name?: IOrderDirections | undefined;
    color?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

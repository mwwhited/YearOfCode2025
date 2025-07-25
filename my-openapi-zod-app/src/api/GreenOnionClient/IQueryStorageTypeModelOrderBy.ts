//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStorageTypeModelOrderBy } from "./ZQueryStorageTypeModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryStorageTypeModelOrderBy {
    $schema: typeof ZQueryStorageTypeModelOrderBy;

    storageTypeId?: IOrderDirections | undefined;
    storageTypeName?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStorageTypeModelFilter } from "./ZQueryStorageTypeModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryStorageTypeModelFilter {
    $schema: typeof ZQueryStorageTypeModelFilter;

    storageTypeId?: IFilterParameter | undefined;
    storageTypeName?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

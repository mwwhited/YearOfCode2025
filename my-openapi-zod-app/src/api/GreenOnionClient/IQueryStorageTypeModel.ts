//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStorageTypeModel } from "./ZQueryStorageTypeModel";

type integer = number;

export interface IQueryStorageTypeModel {
    $schema: typeof ZQueryStorageTypeModel;

    storageTypeId?: integer | undefined;
    storageTypeName?: string | undefined;

    toJSON(data?: any) : any;
}

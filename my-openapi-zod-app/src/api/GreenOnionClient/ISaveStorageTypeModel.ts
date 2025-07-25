//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveStorageTypeModel } from "./ZSaveStorageTypeModel";

type integer = number;

export interface ISaveStorageTypeModel {
    $schema: typeof ZSaveStorageTypeModel;

    storageTypeId?: integer | undefined; 
    storageTypeName?: string | undefined; 

    toJSON(data?: any) : any;
}

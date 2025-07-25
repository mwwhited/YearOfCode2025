//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveDefinedFilterModel } from "./ZSaveDefinedFilterModel";

type integer = number;

export interface ISaveDefinedFilterModel {
    $schema: typeof ZSaveDefinedFilterModel;

    definedFilterId?: integer | undefined;
    path?: string | undefined;
    name?: string | undefined;
    isActive?: boolean | undefined;
    state?: string | undefined;

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductTableField } from "./ZProductTableField";

type integer = number;

export interface IProductTableField {
    $schema: typeof ZProductTableField;

    fieldID?: integer | undefined;
    fieldName?: string | undefined;

    toJSON(data?: any) : any;
}

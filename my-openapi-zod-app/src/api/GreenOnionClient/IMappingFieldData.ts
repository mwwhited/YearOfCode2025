//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZMappingFieldData } from "./ZMappingFieldData";

type integer = number;

export interface IMappingFieldData {
    $schema: typeof ZMappingFieldData;

    mappingID?: integer | undefined; 
    isChecked?: boolean | undefined; 
    fileFieldName?: string | undefined; 
    tableFieldID?: string | undefined; 
    tableFieldName?: string | undefined; 

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZFileHeaderData } from "./ZFileHeaderData";

type integer = number;

export interface IFileHeaderData {
    $schema: typeof ZFileHeaderData;

    headerDataId?: integer | undefined; 
    headerDataName?: string | undefined; 
    headerDataValue?: string | undefined; 

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZFileHeaderData = z.object({
    headerDataId:z.number().int().optional(),
    headerDataName:z.string().optional(),
    headerDataValue:z.string().optional(),
});

export default ZFileHeaderData;
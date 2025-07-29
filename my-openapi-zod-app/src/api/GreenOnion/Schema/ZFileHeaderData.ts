//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";

const ZFileHeaderData = z.object({
    headerDataId: z.number().int().nullish(),
    headerDataName: z.string().nullish(),
    headerDataValue: z.string().nullish(),
});

export default ZFileHeaderData;
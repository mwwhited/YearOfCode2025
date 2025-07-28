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
import ZOrderDirections from "./ZOrderDirections";

const ZQueryErrorLogModelOrderBy = z.object({
    errorLogId: ZOrderDirections.optional(),
    errorMessage: ZOrderDirections.optional(),
    errorPath: ZOrderDirections.optional(),
});

export default ZQueryErrorLogModelOrderBy;
//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";
import ZOrderDirections from "./ZOrderDirections";

const ZQueryIocCategoryModelOrderBy = z.object({
    iocCategoryId: ZOrderDirections.optional(),
    name: ZOrderDirections.optional(),
    color: ZOrderDirections.optional(),
});

export default ZQueryIocCategoryModelOrderBy;
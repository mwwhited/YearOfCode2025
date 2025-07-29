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

const ZQueryIocCategoryModelOrderBy = z.object({
    iocCategoryId: ZOrderDirections.nullish(),
    name: ZOrderDirections.nullish(),
    color: ZOrderDirections.nullish(),
});

export default ZQueryIocCategoryModelOrderBy;
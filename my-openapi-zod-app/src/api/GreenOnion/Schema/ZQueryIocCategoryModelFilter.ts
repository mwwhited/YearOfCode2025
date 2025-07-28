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
import ZFilterParameter from "./ZFilterParameter";

const ZQueryIocCategoryModelFilter = z.object({
    iocCategoryId: ZFilterParameter.optional(),
    name: ZFilterParameter.optional(),
    color: ZFilterParameter.optional(),
});

export default ZQueryIocCategoryModelFilter;
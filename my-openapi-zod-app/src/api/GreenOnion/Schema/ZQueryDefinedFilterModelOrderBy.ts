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

const ZQueryDefinedFilterModelOrderBy = z.object({
    definedFilterId: ZOrderDirections.nullish(),
    createById: ZOrderDirections.nullish(),
    updatedOn: ZOrderDirections.nullish(),
    updatedById: ZOrderDirections.nullish(),
    updatedBy: ZOrderDirections.nullish(),
    createBy: ZOrderDirections.nullish(),
    path: ZOrderDirections.nullish(),
    name: ZOrderDirections.nullish(),
    isActive: ZOrderDirections.nullish(),
    createdOn: ZOrderDirections.nullish(),
    state: ZOrderDirections.nullish(),
});

export default ZQueryDefinedFilterModelOrderBy;
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

const ZQueryCategoryModelOrderBy = z.object({
    categoryId: ZOrderDirections.nullish(),
    categoryName: ZOrderDirections.nullish(),
    categoryCode: ZOrderDirections.nullish(),
    isActive: ZOrderDirections.nullish(),
    createdOn: ZOrderDirections.nullish(),
    createdById: ZOrderDirections.nullish(),
    createdBy: ZOrderDirections.nullish(),
    updatedOn: ZOrderDirections.nullish(),
    updatedById: ZOrderDirections.nullish(),
    updatedBy: ZOrderDirections.nullish(),
});

export default ZQueryCategoryModelOrderBy;
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

const ZQueryDistributorModelFilter = z.object({
    distributorId: ZFilterParameter.nullish(),
    distributorName: ZFilterParameter.nullish(),
    distributorCode: ZFilterParameter.nullish(),
    isActive: ZFilterParameter.nullish(),
    createdOn: ZFilterParameter.nullish(),
    createdById: ZFilterParameter.nullish(),
    createdBy: ZFilterParameter.nullish(),
    updatedOn: ZFilterParameter.nullish(),
    updatedById: ZFilterParameter.nullish(),
    updatedBy: ZFilterParameter.nullish(),
});

export default ZQueryDistributorModelFilter;
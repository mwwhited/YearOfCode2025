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

const ZQueryDefinedFilterModelFilter = z.object({
    definedFilterId: ZFilterParameter.nullish(),  
    createById: ZFilterParameter.nullish(),  
    updatedOn: ZFilterParameter.nullish(),  
    updatedById: ZFilterParameter.nullish(),  
    updatedBy: ZFilterParameter.nullish(),  
    createBy: ZFilterParameter.nullish(),  
    path: ZFilterParameter.nullish(),  
    name: ZFilterParameter.nullish(),  
    isActive: ZFilterParameter.nullish(),  
    createdOn: ZFilterParameter.nullish(),  
    state: ZFilterParameter.nullish(),  
});

export default ZQueryDefinedFilterModelFilter;
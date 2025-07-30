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

const ZQueryRoleModelFilter = z.object({
    roleId: ZFilterParameter.nullish(),  
    roleName: ZFilterParameter.nullish(),  
    isActive: ZFilterParameter.nullish(),  
    userCount: ZFilterParameter.nullish(),  
    activeUserCount: ZFilterParameter.nullish(),  
    createdOn: ZFilterParameter.nullish(),  
    createdById: ZFilterParameter.nullish(),  
    createdBy: ZFilterParameter.nullish(),  
    updatedOn: ZFilterParameter.nullish(),  
    updatedById: ZFilterParameter.nullish(),  
    updatedBy: ZFilterParameter.nullish(),  
});

export default ZQueryRoleModelFilter;
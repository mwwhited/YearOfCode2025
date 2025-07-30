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

const ZQueryRoleModel = z.object({
    roleId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    roleName: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    userCount: z.number().int().meta({}).nullish(),  
    activeUserCount: z.number().int().meta({}).nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    createdById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    createdBy: z.string().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    updatedBy: z.string().meta({}).nullish(),  
});

export default ZQueryRoleModel;
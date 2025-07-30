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

const ZQueryUserModel = z.object({
    userId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),
    username: z.string().meta({}).nullish(),  
    firstName: z.string().meta({}).nullish(),  
    lastName: z.string().meta({}).nullish(),  
    objectId: z.string().meta({}).nullish(),  
    email: z.string().meta({}).nullish(),  
    mobile: z.string().meta({}).nullish(),  
    profileImage: z.string().meta({}).nullish(),  
    coverImage: z.string().meta({}).nullish(),  
    addressLine1: z.string().meta({}).nullish(),  
    addressLine2: z.string().meta({}).nullish(),  
    city: z.string().meta({}).nullish(),  
    country: z.string().meta({}).nullish(),  
    zipCode: z.string().meta({}).nullish(),  
    stateId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryStateModel',}).nullish(),  
    state: z.string().meta({}).nullish(),  
    roleId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryRoleModel',}).nullish(),  
    roleName: z.string().meta({}).nullish(),  
    schoolDistrictId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QuerySchoolDistrictModel',}).nullish(),
    districtId: z.number().int().meta({}).nullish(),  
    schoolDistrictName: z.string().meta({}).nullish(),  
    manufacturerId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryManufacturerModel',}).nullish(),  
    manufacturerName: z.string().meta({}).nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    createdById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    createdBy: z.string().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    updatedBy: z.string().meta({}).nullish(),  
});

export default ZQueryUserModel;
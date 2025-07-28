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

const ZQueryRoleModelOrderBy = z.object({
    roleId: ZOrderDirections.optional(),
    roleName: ZOrderDirections.optional(),
    isActive: ZOrderDirections.optional(),
    userCount: ZOrderDirections.optional(),
    activeUserCount: ZOrderDirections.optional(),
    createdOn: ZOrderDirections.optional(),
    createdById: ZOrderDirections.optional(),
    createdBy: ZOrderDirections.optional(),
    updatedOn: ZOrderDirections.optional(),
    updatedById: ZOrderDirections.optional(),
    updatedBy: ZOrderDirections.optional(),
});

export default ZQueryRoleModelOrderBy;
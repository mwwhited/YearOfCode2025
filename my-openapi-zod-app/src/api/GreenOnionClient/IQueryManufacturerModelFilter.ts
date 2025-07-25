//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryManufacturerModelFilter } from "./ZQueryManufacturerModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryManufacturerModelFilter {
    $schema: typeof ZQueryManufacturerModelFilter;

    manufacturerId?: IFilterParameter | undefined;
    manufacturerName?: IFilterParameter | undefined;
    glnNumber?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    hasUsers?: IFilterParameter | undefined;
    userCount?: IFilterParameter | undefined;
    hasActiveUsers?: IFilterParameter | undefined;
    activeUserCount?: IFilterParameter | undefined;
    productCount?: IFilterParameter | undefined;
    hasOneWorldSync?: IFilterParameter | undefined;
    oneWorldSyncCount?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}

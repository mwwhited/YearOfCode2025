//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryManufacturerModelOrderBy } from "./ZQueryManufacturerModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryManufacturerModelOrderBy {
    $schema: typeof ZQueryManufacturerModelOrderBy;

    manufacturerId?: IOrderDirections | undefined;
    manufacturerName?: IOrderDirections | undefined;
    glnNumber?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    hasUsers?: IOrderDirections | undefined;
    userCount?: IOrderDirections | undefined;
    hasActiveUsers?: IOrderDirections | undefined;
    activeUserCount?: IOrderDirections | undefined;
    productCount?: IOrderDirections | undefined;
    hasOneWorldSync?: IOrderDirections | undefined;
    oneWorldSyncCount?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}

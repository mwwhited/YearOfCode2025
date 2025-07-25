//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZDataMigrationThroughApiResponseModel } from "./ZDataMigrationThroughApiResponseModel";

type integer = number;

export interface IDataMigrationThroughApiResponseModel {
    $schema: typeof ZDataMigrationThroughApiResponseModel;

    success?: boolean | undefined;
    message?: string | undefined;
    totalRecords?: integer | undefined;
    payload?: unknown | undefined;
    isUpdate?: boolean | undefined;
    isAdded?: boolean | undefined;
    isDelete?: boolean | undefined;

    toJSON(data?: any) : any;
}

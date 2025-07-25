//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveMonthlyNumberModel } from "./ZSaveMonthlyNumberModel";

type integer = number;

export interface ISaveMonthlyNumberModel {
    $schema: typeof ZSaveMonthlyNumberModel;

    id?: integer | undefined;
    schoolDistrictId?: integer | undefined;
    monthId?: integer | undefined;
    actualMonthId?: integer | undefined;
    year?: string | undefined;
    enrollment?: integer | undefined;
    numberOfSites?: integer | undefined;
    numberOfDistricts?: integer | undefined;
    mealsServed?: integer | undefined;
    freeAndReducedPercent?: integer | undefined;
    isActive?: boolean | undefined;

    toJSON(data?: any) : any;
}

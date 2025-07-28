//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZFilterParameter from "./ZFilterParameter";

const ZQueryMonthlyNumberModelFilter = z.object({
    id: ZFilterParameter.optional(),
    schoolDistrictId: ZFilterParameter.optional(),
    monthId: ZFilterParameter.optional(),
    actualMonthId: ZFilterParameter.optional(),
    year: ZFilterParameter.optional(),
    enrollment: ZFilterParameter.optional(),
    numberOfSites: ZFilterParameter.optional(),
    numberOfDistricts: ZFilterParameter.optional(),
    mealsServed: ZFilterParameter.optional(),
    freeAndReducedPercent: ZFilterParameter.optional(),
    isActive: ZFilterParameter.optional(),
    regDate: ZFilterParameter.optional(),
    createdOn: ZFilterParameter.optional(),
    createdById: ZFilterParameter.optional(),
    createdBy: ZFilterParameter.optional(),
    updatedOn: ZFilterParameter.optional(),
    updatedById: ZFilterParameter.optional(),
    updatedBy: ZFilterParameter.optional(),
});

export default ZQueryMonthlyNumberModelFilter;
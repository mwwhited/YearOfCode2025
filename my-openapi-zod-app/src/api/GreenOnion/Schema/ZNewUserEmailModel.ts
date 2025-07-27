//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZNewUserEmailModel = z.object({
    firstName:z.string().optional(),
    lastName:z.string().optional(),
    role:z.string().optional(),
    email:z.string().optional(),
    association:z.string().optional(),
});

export default ZNewUserEmailModel;
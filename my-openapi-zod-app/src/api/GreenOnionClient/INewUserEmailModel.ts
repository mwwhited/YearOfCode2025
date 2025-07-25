//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZNewUserEmailModel } from "./ZNewUserEmailModel";

type integer = number;

export interface INewUserEmailModel {
    $schema: typeof ZNewUserEmailModel;

    firstName?: string | undefined;
    lastName?: string | undefined;
    role?: string | undefined;
    email?: string | undefined;
    association?: string | undefined;

    toJSON(data?: any) : any;
}

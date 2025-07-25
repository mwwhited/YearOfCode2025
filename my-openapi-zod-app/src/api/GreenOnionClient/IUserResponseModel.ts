//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZUserResponseModel } from "./ZUserResponseModel";
import type { IRoleMst } from "./IRoleMst";

type integer = number;

export interface IUserResponseModel {
    $schema: typeof ZUserResponseModel;

    success?: boolean | undefined; 
    message?: string | undefined; 
    totalRecords?: integer | undefined; 
    payload?: any | undefined; 
    isUpdate?: boolean | undefined; 
    isAdded?: boolean | undefined; 
    isDelete?: boolean | undefined; 
    roleList?: IRoleMst[] | undefined; 
    isEmailExists?: boolean | undefined; 

    toJSON(data?: any) : any;
}

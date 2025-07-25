//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSelectProductSaveCheckListRequestModel } from "./ZSelectProductSaveCheckListRequestModel";
import type { IProductCheck } from "./IProductCheck";

type integer = number;

export interface ISelectProductSaveCheckListRequestModel {
    $schema: typeof ZSelectProductSaveCheckListRequestModel;

    uniqueExcelFileId?: string | undefined; 
    userOrDistrictId?: integer | undefined; 
    option?: string | undefined; 
    productCheckList?: IProductCheck[] | undefined; 

    toJSON(data?: any) : any;
}

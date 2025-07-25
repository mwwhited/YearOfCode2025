//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZFileUploadResponse } from "./ZFileUploadResponse";
import type { IMappingFieldData } from "./IMappingFieldData";
import type { IFileHeader } from "./IFileHeader";
import type { IFileHeaderData } from "./IFileHeaderData";
import type { IProductUploadModel } from "./IProductUploadModel";
import type { IProductTableField } from "./IProductTableField";
import type { IFileStatus } from "./IFileStatus";

type integer = number;

export interface IFileUploadResponse {
    $schema: typeof ZFileUploadResponse;

    manufacture?: string | undefined; 
    distributer?: string | undefined; 
    districtName?: string | undefined; 
    mappingFieldList?: IMappingFieldData[] | undefined; 
    fileHeaderList?: IFileHeader[] | undefined; 
    fileDataList?: IFileHeaderData[] | undefined; 
    productList?: IProductUploadModel[] | undefined; 
    tableFieldList?: IProductTableField[] | undefined; 
    uniqueExcelFileId?: string | undefined; 
    statusList?: IFileStatus[] | undefined; 
    absolutePath?: string | undefined; 
    success?: boolean | undefined; 
    message?: string | undefined; 
    payload?: any | undefined; 

    toJSON(data?: any) : any;
}

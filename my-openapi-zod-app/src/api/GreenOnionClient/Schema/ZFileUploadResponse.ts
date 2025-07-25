//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZMappingFieldData } from "./ZMappingFieldData";
import { ZFileHeader } from "./ZFileHeader";
import { ZFileHeaderData } from "./ZFileHeaderData";
import { ZProductUploadModel } from "./ZProductUploadModel";
import { ZProductTableField } from "./ZProductTableField";
import { ZFileStatus } from "./ZFileStatus";

export const ZFileUploadResponse = z.object({
    manufacture:z.string().optional(),
    distributer:z.string().optional(),
    districtName:z.string().optional(),
    mappingFieldList:z.array(ZMappingFieldData).optional(),
    fileHeaderList:z.array(ZFileHeader).optional(),
    fileDataList:z.array(ZFileHeaderData).optional(),
    productList:z.array(ZProductUploadModel).optional(),
    tableFieldList:z.array(ZProductTableField).optional(),
    uniqueExcelFileId:z.string().optional(),
    statusList:z.array(ZFileStatus).optional(),
    absolutePath:z.string().optional(),
    success:z.boolean().optional(),
    message:z.string().optional(),
    payload:z.unknown().optional(),
});

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";
import ZMappingFieldData from "./ZMappingFieldData";
import ZFileHeader from "./ZFileHeader";
import ZFileHeaderData from "./ZFileHeaderData";
import ZProductUploadModel from "./ZProductUploadModel";
import ZProductTableField from "./ZProductTableField";
import ZFileStatus from "./ZFileStatus";

const ZFileUploadResponse = z.object({
    manufacture: z.string().nullish(),
    distributer: z.string().nullish(),
    districtName: z.string().nullish(),
    mappingFieldList: z.array(ZMappingFieldData).nullish(),
    fileHeaderList: z.array(ZFileHeader).nullish(),
    fileDataList: z.array(ZFileHeaderData).nullish(),
    productList: z.array(ZProductUploadModel).nullish(),
    tableFieldList: z.array(ZProductTableField).nullish(),
    uniqueExcelFileId: z.string().nullish(),
    statusList: z.array(ZFileStatus).nullish(),
    absolutePath: z.string().nullish(),
    success: z.boolean().nullish(),
    message: z.string().nullish(),
    payload: z.unknown().nullish(),
});

export default ZFileUploadResponse;
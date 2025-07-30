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
    manufacture: z.string().nullish().meta({}),  
    distributer: z.string().nullish().meta({}),  
    districtName: z.string().nullish().meta({}),  
    mappingFieldList: z.array(ZMappingFieldData).nullish().meta({}),  
    fileHeaderList: z.array(ZFileHeader).nullish().meta({}),  
    fileDataList: z.array(ZFileHeaderData).nullish().meta({}),  
    productList: z.array(ZProductUploadModel).nullish().meta({}),  
    tableFieldList: z.array(ZProductTableField).nullish().meta({}),  
    uniqueExcelFileId: z.string().nullish().meta({}),  
    statusList: z.array(ZFileStatus).nullish().meta({}),  
    absolutePath: z.string().nullish().meta({}),  
    success: z.boolean().nullish().meta({}),  
    message: z.string().nullish().meta({}),  
    payload: z.any().nullish().meta({}),  
});

export default ZFileUploadResponse;
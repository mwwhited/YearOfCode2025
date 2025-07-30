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
    manufacture: z.string().meta({}).nullish(),  
    distributer: z.string().meta({}).nullish(),  
    districtName: z.string().meta({}).nullish(),  
    mappingFieldList: z.array(ZMappingFieldData).meta({}).nullish(),  
    fileHeaderList: z.array(ZFileHeader).meta({}).nullish(),  
    fileDataList: z.array(ZFileHeaderData).meta({}).nullish(),  
    productList: z.array(ZProductUploadModel).meta({}).nullish(),  
    tableFieldList: z.array(ZProductTableField).meta({}).nullish(),  
    uniqueExcelFileId: z.string().meta({}).nullish(),  
    statusList: z.array(ZFileStatus).meta({}).nullish(),  
    absolutePath: z.string().meta({}).nullish(),  
    success: z.boolean().meta({}).nullish(),  
    message: z.string().meta({}).nullish(),  
    payload: z.any().meta({}).nullish(),  
});

export default ZFileUploadResponse;
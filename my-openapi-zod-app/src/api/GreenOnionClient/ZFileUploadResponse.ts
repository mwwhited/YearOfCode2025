//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { IMappingFieldData } from "./IMappingFieldData";
import { ZMappingFieldData } from "./ZMappingFieldData";
import type { IFileHeader } from "./IFileHeader";
import { ZFileHeader } from "./ZFileHeader";
import type { IFileHeaderData } from "./IFileHeaderData";
import { ZFileHeaderData } from "./ZFileHeaderData";
import type { IProductUploadModel } from "./IProductUploadModel";
import { ZProductUploadModel } from "./ZProductUploadModel";
import type { IProductTableField } from "./IProductTableField";
import { ZProductTableField } from "./ZProductTableField";
import type { IFileStatus } from "./IFileStatus";
import { ZFileStatus } from "./ZFileStatus";

import type { IFileUploadResponse } from "./IFileUploadResponse";


export const ZFileUploadResponse: z.ZodType<IFileUploadResponse> = z.object({
    manufacture: z.string(),
    distributer: z.string(),
    districtName: z.string(),
    mappingFieldList: z.string(),
    fileHeaderList: z.string(),
    fileDataList: z.string(),
    productList: z.string(),
    tableFieldList: z.string(),
    uniqueExcelFileId: z.string(),
    statusList: z.string(),
    absolutePath: z.string(),
    success: z.string(),
    message: z.string(),
    payload: z.string(),
});
/*
[class, FileUploadResponse],[interface, IFileUploadResponse],[schema, ZFileUploadResponse],[definition, {
        "type": "object",
        "properties": {
          "manufacture": {
            "type": "string",
            "nullable": true
          },
          "distributer": {
            "type": "string",
            "nullable": true
          },
          "districtName": {
            "type": "string",
            "nullable": true
          },
          "mappingFieldList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.MappingFieldData"
            },
            "nullable": true
          },
          "fileHeaderList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.FileHeader"
            },
            "nullable": true
          },
          "fileDataList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.FileHeaderData"
            },
            "nullable": true
          },
          "productList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.ProductUploadModel"
            },
            "nullable": true
          },
          "tableFieldList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.ProductTableField"
            },
            "nullable": true
          },
          "uniqueExcelFileId": {
            "type": "string",
            "format": "uuid",
            "nullable": true
          },
          "statusList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.FileStatus"
            },
            "nullable": true
          },
          "absolutePath": {
            "type": "string",
            "nullable": true
          },
          "success": {
            "type": "boolean",
            "nullable": true
          },
          "message": {
            "type": "string",
            "nullable": true
          },
          "payload": {
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/

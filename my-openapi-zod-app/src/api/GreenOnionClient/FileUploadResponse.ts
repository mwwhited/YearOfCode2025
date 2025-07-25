//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IFileUploadResponse } from "./IFileUploadResponse";
import { ZFileUploadResponse } from "./ZFileUploadResponse";

import { MappingFieldData } from "./MappingFieldData";
import type { IMappingFieldData } from "./IMappingFieldData";
import { FileHeader } from "./FileHeader";
import type { IFileHeader } from "./IFileHeader";
import { FileHeaderData } from "./FileHeaderData";
import type { IFileHeaderData } from "./IFileHeaderData";
import { ProductUploadModel } from "./ProductUploadModel";
import type { IProductUploadModel } from "./IProductUploadModel";
import { ProductTableField } from "./ProductTableField";
import type { IProductTableField } from "./IProductTableField";
import { FileStatus } from "./FileStatus";
import type { IFileStatus } from "./IFileStatus";

type integer = number;

export class FileUploadResponse implements IFileUploadResponse {
    readonly $schema: typeof ZFileUploadResponse = ZFileUploadResponse;
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

    constructor(data?: IFileUploadResponse) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).manufacture = _data["manufacture:"];
            (<any>this).distributer = _data["distributer:"];
            (<any>this).districtName = _data["districtName:"];
            if (Array.isArray(_data["mappingFieldList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["mappingFieldList"])
                    (<any>this).mappingFieldList!.push(MappingFieldData.fromJS(item));
            }
            if (Array.isArray(_data["fileHeaderList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["fileHeaderList"])
                    (<any>this).fileHeaderList!.push(FileHeader.fromJS(item));
            }
            if (Array.isArray(_data["fileDataList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["fileDataList"])
                    (<any>this).fileDataList!.push(FileHeaderData.fromJS(item));
            }
            if (Array.isArray(_data["productList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["productList"])
                    (<any>this).productList!.push(ProductUploadModel.fromJS(item));
            }
            if (Array.isArray(_data["tableFieldList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["tableFieldList"])
                    (<any>this).tableFieldList!.push(ProductTableField.fromJS(item));
            }
            (<any>this).uniqueExcelFileId = _data["uniqueExcelFileId:"];
            if (Array.isArray(_data["statusList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["statusList"])
                    (<any>this).statusList!.push(FileStatus.fromJS(item));
            }
            (<any>this).absolutePath = _data["absolutePath:"];
            (<any>this).success = _data["success:"];
            (<any>this).message = _data["message:"];
            (<any>this).payload = _data["payload:"];
        }
    } 
    
    static fromJS(data: any): IFileUploadResponse {
        data = typeof data === 'object' ? data : {};
        const result = new FileUploadResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["manufacture"] = this.manufacture;
        data["distributer"] = this.distributer;
        data["districtName"] = this.districtName;
        if (Array.isArray(this.mappingFieldList)) {
            data["mappingFieldList"] = [];
            for (let item of this.mappingFieldList)
                data["mappingFieldList"].push(item ? item.toJSON() : <any>undefined);
        }
        if (Array.isArray(this.fileHeaderList)) {
            data["fileHeaderList"] = [];
            for (let item of this.fileHeaderList)
                data["fileHeaderList"].push(item ? item.toJSON() : <any>undefined);
        }
        if (Array.isArray(this.fileDataList)) {
            data["fileDataList"] = [];
            for (let item of this.fileDataList)
                data["fileDataList"].push(item ? item.toJSON() : <any>undefined);
        }
        if (Array.isArray(this.productList)) {
            data["productList"] = [];
            for (let item of this.productList)
                data["productList"].push(item ? item.toJSON() : <any>undefined);
        }
        if (Array.isArray(this.tableFieldList)) {
            data["tableFieldList"] = [];
            for (let item of this.tableFieldList)
                data["tableFieldList"].push(item ? item.toJSON() : <any>undefined);
        }
        data["uniqueExcelFileId"] = this.uniqueExcelFileId;
        if (Array.isArray(this.statusList)) {
            data["statusList"] = [];
            for (let item of this.statusList)
                data["statusList"].push(item ? item.toJSON() : <any>undefined);
        }
        data["absolutePath"] = this.absolutePath;
        data["success"] = this.success;
        data["message"] = this.message;
        data["payload"] = this.payload;
        return data;
    }

}

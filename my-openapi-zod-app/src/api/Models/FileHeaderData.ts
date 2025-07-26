//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IFileHeaderData } from "./IFileHeaderData";
import { ZFileHeaderData } from "../Schema/ZFileHeaderData";

type integer = number;

export class FileHeaderData implements IFileHeaderData {
    readonly $zod: typeof ZFileHeaderData = ZFileHeaderData;
    
    headerDataId?: integer | undefined;
    headerDataName?: string | undefined;
    headerDataValue?: string | undefined;

    constructor(data?: IFileHeaderData) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IFileHeaderData>) {
        if (_data) {
            (<any>this).headerDataId = _data["headerDataId"];
            (<any>this).headerDataName = _data["headerDataName"];
            (<any>this).headerDataValue = _data["headerDataValue"];
        }
    } 
    
    static fromJS(data: Partial<IFileHeaderData>): IFileHeaderData {
        data = typeof data === 'object' ? data : {};
        const result = new FileHeaderData();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["headerDataId"] = this.headerDataId;
        data["headerDataName"] = this.headerDataName;
        data["headerDataValue"] = this.headerDataValue;
        return data;
    }
}

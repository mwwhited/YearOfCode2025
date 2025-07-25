//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IFileHeader } from "./IFileHeader";
import { ZFileHeader } from "./ZFileHeader";

type integer = number;

export class FileHeader implements IFileHeader {
    readonly $schema: typeof ZFileHeader = ZFileHeader;
    
    headerId?: integer | undefined;
    headerName?: string | undefined;

    constructor(data?: IFileHeader) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IFileHeader>) {
        if (_data) {
            (<any>this).headerId = _data["headerId"];
            (<any>this).headerName = _data["headerName"];
        }
    } 
    
    static fromJS(data: Partial<IFileHeader>): IFileHeader {
        data = typeof data === 'object' ? data : {};
        const result = new FileHeader();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["headerId"] = this.headerId;
        data["headerName"] = this.headerName;
        return data;
    }
}

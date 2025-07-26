//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IFileStatus } from "./IFileStatus";
import { ZFileStatus } from "../Schema/ZFileStatus";

type integer = number;

export class FileStatus implements IFileStatus {
    readonly $zod: typeof ZFileStatus = ZFileStatus;
    
    status?: boolean | undefined;
    reason?: string | undefined;

    constructor(data?: IFileStatus) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IFileStatus>) {
        if (_data) {
            (<any>this).status = _data["status"];
            (<any>this).reason = _data["reason"];
        }
    } 
    
    static fromJS(data: Partial<IFileStatus>): IFileStatus {
        data = typeof data === 'object' ? data : {};
        const result = new FileStatus();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["status"] = this.status;
        data["reason"] = this.reason;
        return data;
    }
}

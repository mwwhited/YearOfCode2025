//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IFileStatus } from "./IFileStatus";
import { ZFileStatus } from "./ZFileStatus";


type integer = number;

export class FileStatus implements IFileStatus {
    readonly $schema: typeof ZFileStatus = ZFileStatus;
    status?: boolean | undefined; 
    reason?: string | undefined; 

    constructor(data?: IFileStatus) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).status = _data["status:"];
            (<any>this).reason = _data["reason:"];
        }
    } 
    
    static fromJS(data: any): IFileStatus {
        data = typeof data === 'object' ? data : {};
        let result = new FileStatus();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["status"] = this.status;
        data["reason"] = this.reason;
        return data;
    }

}

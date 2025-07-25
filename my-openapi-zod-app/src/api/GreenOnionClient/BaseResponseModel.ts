//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IBaseResponseModel } from "./IBaseResponseModel";
import { ZBaseResponseModel } from "./ZBaseResponseModel";

type integer = number;

export class BaseResponseModel implements IBaseResponseModel {
    readonly $zod: typeof ZBaseResponseModel = ZBaseResponseModel;
    
    success?: boolean | undefined;
    message?: string | undefined;
    totalRecords?: integer | undefined;
    payload?: unknown | undefined;

    constructor(data?: IBaseResponseModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IBaseResponseModel>) {
        if (_data) {
            (<any>this).success = _data["success"];
            (<any>this).message = _data["message"];
            (<any>this).totalRecords = _data["totalRecords"];
            (<any>this).payload = _data["payload"];
        }
    } 
    
    static fromJS(data: Partial<IBaseResponseModel>): IBaseResponseModel {
        data = typeof data === 'object' ? data : {};
        const result = new BaseResponseModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["success"] = this.success;
        data["message"] = this.message;
        data["totalRecords"] = this.totalRecords;
        data["payload"] = this.payload;
        return data;
    }
}

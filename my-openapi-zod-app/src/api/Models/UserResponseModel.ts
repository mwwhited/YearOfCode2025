//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IUserResponseModel } from "./IUserResponseModel";
import { ZUserResponseModel } from "../Schema/ZUserResponseModel";
import { RoleMst } from "./RoleMst";
import type { IRoleMst } from "./IRoleMst";

type integer = number;

export class UserResponseModel implements IUserResponseModel {
    readonly $zod: typeof ZUserResponseModel = ZUserResponseModel;
    
    success?: boolean | undefined;
    message?: string | undefined;
    totalRecords?: integer | undefined;
    payload?: unknown | undefined;
    isUpdate?: boolean | undefined;
    isAdded?: boolean | undefined;
    isDelete?: boolean | undefined;
    roleList?: IRoleMst[] | undefined;
    isEmailExists?: boolean | undefined;

    constructor(data?: IUserResponseModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IUserResponseModel>) {
        if (_data) {
            (<any>this).success = _data["success"];
            (<any>this).message = _data["message"];
            (<any>this).totalRecords = _data["totalRecords"];
            (<any>this).payload = _data["payload"];
            (<any>this).isUpdate = _data["isUpdate"];
            (<any>this).isAdded = _data["isAdded"];
            (<any>this).isDelete = _data["isDelete"];
            if (Array.isArray(_data["roleList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["roleList"])
                    (<any>this).roleList!.push(RoleMst.fromJS(item));
            }
            (<any>this).isEmailExists = _data["isEmailExists"];
        }
    } 
    
    static fromJS(data: Partial<IUserResponseModel>): IUserResponseModel {
        data = typeof data === 'object' ? data : {};
        const result = new UserResponseModel();
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
        data["isUpdate"] = this.isUpdate;
        data["isAdded"] = this.isAdded;
        data["isDelete"] = this.isDelete;
        if (Array.isArray(this.roleList)) {
            data["roleList"] = [];
            for (let item of this.roleList)
                data["roleList"].push(item ? item.toJSON() : <any>undefined);
        }
        data["isEmailExists"] = this.isEmailExists;
        return data;
    }
}

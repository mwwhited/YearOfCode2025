//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { ISaveUserModel } from "./ISaveUserModel";
import { ZSaveUserModel } from "../Schema/ZSaveUserModel";

type integer = number;

export class SaveUserModel implements ISaveUserModel {
    readonly $zod: typeof ZSaveUserModel = ZSaveUserModel;
    
    userId?: integer | undefined;
    isActive?: boolean | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    mobile?: string | undefined;
    profileImage?: string | undefined;
    coverImage?: string | undefined;
    addressLine1?: string | undefined;
    addressLine2?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    zipCode?: string | undefined;
    stateId?: integer | undefined;
    roleId?: integer | undefined;
    schoolDistrictId?: integer | undefined;
    manufacturerId?: integer | undefined;

    constructor(data?: ISaveUserModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveUserModel>) {
        if (_data) {
            (<any>this).userId = _data["userId"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).firstName = _data["firstName"];
            (<any>this).lastName = _data["lastName"];
            (<any>this).email = _data["email"];
            (<any>this).mobile = _data["mobile"];
            (<any>this).profileImage = _data["profileImage"];
            (<any>this).coverImage = _data["coverImage"];
            (<any>this).addressLine1 = _data["addressLine1"];
            (<any>this).addressLine2 = _data["addressLine2"];
            (<any>this).city = _data["city"];
            (<any>this).country = _data["country"];
            (<any>this).zipCode = _data["zipCode"];
            (<any>this).stateId = _data["stateId"];
            (<any>this).roleId = _data["roleId"];
            (<any>this).schoolDistrictId = _data["schoolDistrictId"];
            (<any>this).manufacturerId = _data["manufacturerId"];
        }
    } 
    
    static fromJS(data: Partial<ISaveUserModel>): ISaveUserModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveUserModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["userId"] = this.userId;
        data["isActive"] = this.isActive;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["email"] = this.email;
        data["mobile"] = this.mobile;
        data["profileImage"] = this.profileImage;
        data["coverImage"] = this.coverImage;
        data["addressLine1"] = this.addressLine1;
        data["addressLine2"] = this.addressLine2;
        data["city"] = this.city;
        data["country"] = this.country;
        data["zipCode"] = this.zipCode;
        data["stateId"] = this.stateId;
        data["roleId"] = this.roleId;
        data["schoolDistrictId"] = this.schoolDistrictId;
        data["manufacturerId"] = this.manufacturerId;
        return data;
    }
}

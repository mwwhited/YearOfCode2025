//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryUserModelFilter } from "./IQueryUserModelFilter";
import { ZQueryUserModelFilter } from "./ZQueryUserModelFilter";

import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryUserModelFilter implements IQueryUserModelFilter {
    readonly $schema: typeof ZQueryUserModelFilter = ZQueryUserModelFilter;
    userId?: IFilterParameter | undefined; 
    isActive?: IFilterParameter | undefined; 
    firstName?: IFilterParameter | undefined; 
    lastName?: IFilterParameter | undefined; 
    objectId?: IFilterParameter | undefined; 
    email?: IFilterParameter | undefined; 
    mobile?: IFilterParameter | undefined; 
    profileImage?: IFilterParameter | undefined; 
    coverImage?: IFilterParameter | undefined; 
    addressLine1?: IFilterParameter | undefined; 
    addressLine2?: IFilterParameter | undefined; 
    city?: IFilterParameter | undefined; 
    country?: IFilterParameter | undefined; 
    zipCode?: IFilterParameter | undefined; 
    stateId?: IFilterParameter | undefined; 
    state?: IFilterParameter | undefined; 
    roleId?: IFilterParameter | undefined; 
    roleName?: IFilterParameter | undefined; 
    schoolDistrictId?: IFilterParameter | undefined; 
    schoolDistrictName?: IFilterParameter | undefined; 
    manufacturerId?: IFilterParameter | undefined; 
    manufacturerName?: IFilterParameter | undefined; 
    createdOn?: IFilterParameter | undefined; 
    createdById?: IFilterParameter | undefined; 
    createdBy?: IFilterParameter | undefined; 
    updatedOn?: IFilterParameter | undefined; 
    updatedById?: IFilterParameter | undefined; 
    updatedBy?: IFilterParameter | undefined; 

    constructor(data?: IQueryUserModelFilter) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).userId = _data["userId:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).firstName = _data["firstName:"];
            (<any>this).lastName = _data["lastName:"];
            (<any>this).objectId = _data["objectId:"];
            (<any>this).email = _data["email:"];
            (<any>this).mobile = _data["mobile:"];
            (<any>this).profileImage = _data["profileImage:"];
            (<any>this).coverImage = _data["coverImage:"];
            (<any>this).addressLine1 = _data["addressLine1:"];
            (<any>this).addressLine2 = _data["addressLine2:"];
            (<any>this).city = _data["city:"];
            (<any>this).country = _data["country:"];
            (<any>this).zipCode = _data["zipCode:"];
            (<any>this).stateId = _data["stateId:"];
            (<any>this).state = _data["state:"];
            (<any>this).roleId = _data["roleId:"];
            (<any>this).roleName = _data["roleName:"];
            (<any>this).schoolDistrictId = _data["schoolDistrictId:"];
            (<any>this).schoolDistrictName = _data["schoolDistrictName:"];
            (<any>this).manufacturerId = _data["manufacturerId:"];
            (<any>this).manufacturerName = _data["manufacturerName:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).createdById = _data["createdById:"];
            (<any>this).createdBy = _data["createdBy:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryUserModelFilter {
        data = typeof data === 'object' ? data : {};
        let result = new QueryUserModelFilter();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["userId"] = this.userId;
        data["isActive"] = this.isActive;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["objectId"] = this.objectId;
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
        data["state"] = this.state;
        data["roleId"] = this.roleId;
        data["roleName"] = this.roleName;
        data["schoolDistrictId"] = this.schoolDistrictId;
        data["schoolDistrictName"] = this.schoolDistrictName;
        data["manufacturerId"] = this.manufacturerId;
        data["manufacturerName"] = this.manufacturerName;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }

}

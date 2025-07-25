//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryUserModelOrderBy } from "./IQueryUserModelOrderBy";
import { ZQueryUserModelOrderBy } from "./ZQueryUserModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryUserModelOrderBy implements IQueryUserModelOrderBy {
    readonly $schema: typeof ZQueryUserModelOrderBy = ZQueryUserModelOrderBy;
    userId?: IOrderDirections | undefined; 
    isActive?: IOrderDirections | undefined; 
    firstName?: IOrderDirections | undefined; 
    lastName?: IOrderDirections | undefined; 
    objectId?: IOrderDirections | undefined; 
    email?: IOrderDirections | undefined; 
    mobile?: IOrderDirections | undefined; 
    profileImage?: IOrderDirections | undefined; 
    coverImage?: IOrderDirections | undefined; 
    addressLine1?: IOrderDirections | undefined; 
    addressLine2?: IOrderDirections | undefined; 
    city?: IOrderDirections | undefined; 
    country?: IOrderDirections | undefined; 
    zipCode?: IOrderDirections | undefined; 
    stateId?: IOrderDirections | undefined; 
    state?: IOrderDirections | undefined; 
    roleId?: IOrderDirections | undefined; 
    roleName?: IOrderDirections | undefined; 
    schoolDistrictId?: IOrderDirections | undefined; 
    schoolDistrictName?: IOrderDirections | undefined; 
    manufacturerId?: IOrderDirections | undefined; 
    manufacturerName?: IOrderDirections | undefined; 
    createdOn?: IOrderDirections | undefined; 
    createdById?: IOrderDirections | undefined; 
    createdBy?: IOrderDirections | undefined; 
    updatedOn?: IOrderDirections | undefined; 
    updatedById?: IOrderDirections | undefined; 
    updatedBy?: IOrderDirections | undefined; 

    constructor(data?: IQueryUserModelOrderBy) {
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
    
    static fromJS(data: any): IQueryUserModelOrderBy {
        data = typeof data === 'object' ? data : {};
        let result = new QueryUserModelOrderBy();
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

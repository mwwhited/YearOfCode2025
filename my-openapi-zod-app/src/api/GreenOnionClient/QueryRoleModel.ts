//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryRoleModel } from "./IQueryRoleModel";
import { ZQueryRoleModel } from "./ZQueryRoleModel";


type integer = number;

export class QueryRoleModel implements IQueryRoleModel {
    readonly $schema: typeof ZQueryRoleModel = ZQueryRoleModel;
    roleId?: integer | undefined; 
    roleName?: string | undefined; 
    isActive?: boolean | undefined; 
    userCount?: integer | undefined; 
    activeUserCount?: integer | undefined; 
    createdOn?: string | undefined; 
    createdById?: integer | undefined; 
    createdBy?: string | undefined; 
    updatedOn?: string | undefined; 
    updatedById?: integer | undefined; 
    updatedBy?: string | undefined; 

    constructor(data?: IQueryRoleModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).roleId = _data["roleId:"];
            (<any>this).roleName = _data["roleName:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).userCount = _data["userCount:"];
            (<any>this).activeUserCount = _data["activeUserCount:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).createdById = _data["createdById:"];
            (<any>this).createdBy = _data["createdBy:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryRoleModel {
        data = typeof data === 'object' ? data : {};
        let result = new QueryRoleModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["roleId"] = this.roleId;
        data["roleName"] = this.roleName;
        data["isActive"] = this.isActive;
        data["userCount"] = this.userCount;
        data["activeUserCount"] = this.activeUserCount;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }

}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryRoleModelOrderBy } from "./IQueryRoleModelOrderBy";
import { ZQueryRoleModelOrderBy } from "../Schema/ZQueryRoleModelOrderBy";
import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryRoleModelOrderBy implements IQueryRoleModelOrderBy {
    readonly $zod: typeof ZQueryRoleModelOrderBy = ZQueryRoleModelOrderBy;
    
    roleId?: IOrderDirections | undefined;
    roleName?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    userCount?: IOrderDirections | undefined;
    activeUserCount?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    createdById?: IOrderDirections | undefined;
    createdBy?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;

    constructor(data?: IQueryRoleModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryRoleModelOrderBy>) {
        if (_data) {
            (<any>this).roleId = _data["roleId"];
            (<any>this).roleName = _data["roleName"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).userCount = _data["userCount"];
            (<any>this).activeUserCount = _data["activeUserCount"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryRoleModelOrderBy>): IQueryRoleModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryRoleModelOrderBy();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
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

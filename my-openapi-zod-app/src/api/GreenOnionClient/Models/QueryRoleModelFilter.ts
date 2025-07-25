//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryRoleModelFilter } from "./IQueryRoleModelFilter";
import { ZQueryRoleModelFilter } from "../Schema/ZQueryRoleModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryRoleModelFilter implements IQueryRoleModelFilter {
    readonly $zod: typeof ZQueryRoleModelFilter = ZQueryRoleModelFilter;
    
    roleId?: IFilterParameter | undefined;
    roleName?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    userCount?: IFilterParameter | undefined;
    activeUserCount?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    constructor(data?: IQueryRoleModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryRoleModelFilter>) {
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
    
    static fromJS(data: Partial<IQueryRoleModelFilter>): IQueryRoleModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryRoleModelFilter();
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

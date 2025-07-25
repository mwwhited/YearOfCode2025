//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IRoleMst } from "./IRoleMst";
import { ZRoleMst } from "./ZRoleMst";

type integer = number;

export class RoleMst implements IRoleMst {
    readonly $zod: typeof ZRoleMst = ZRoleMst;
    
    roleId?: integer | undefined;
    roleName?: string | undefined;
    parentRoleId?: integer | undefined;
    isActive?: boolean | undefined;
    createdOn?: string | undefined;
    createdByUserId?: integer | undefined;
    updatedOn?: string | undefined;
    updatedByUserId?: integer | undefined;

    constructor(data?: IRoleMst) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IRoleMst>) {
        if (_data) {
            (<any>this).roleId = _data["roleId"];
            (<any>this).roleName = _data["roleName"];
            (<any>this).parentRoleId = _data["parentRoleId"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdByUserId = _data["createdByUserId"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedByUserId = _data["updatedByUserId"];
        }
    } 
    
    static fromJS(data: Partial<IRoleMst>): IRoleMst {
        data = typeof data === 'object' ? data : {};
        const result = new RoleMst();
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
        data["parentRoleId"] = this.parentRoleId;
        data["isActive"] = this.isActive;
        data["createdOn"] = this.createdOn;
        data["createdByUserId"] = this.createdByUserId;
        data["updatedOn"] = this.updatedOn;
        data["updatedByUserId"] = this.updatedByUserId;
        return data;
    }
}

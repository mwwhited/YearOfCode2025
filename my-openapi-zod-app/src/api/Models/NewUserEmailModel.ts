//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { INewUserEmailModel } from "./INewUserEmailModel";
import { ZNewUserEmailModel } from "../Schema/ZNewUserEmailModel";

type integer = number;

export class NewUserEmailModel implements INewUserEmailModel {
    readonly $zod: typeof ZNewUserEmailModel = ZNewUserEmailModel;
    
    firstName?: string | undefined;
    lastName?: string | undefined;
    role?: string | undefined;
    email?: string | undefined;
    association?: string | undefined;

    constructor(data?: INewUserEmailModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<INewUserEmailModel>) {
        if (_data) {
            (<any>this).firstName = _data["firstName"];
            (<any>this).lastName = _data["lastName"];
            (<any>this).role = _data["role"];
            (<any>this).email = _data["email"];
            (<any>this).association = _data["association"];
        }
    } 
    
    static fromJS(data: Partial<INewUserEmailModel>): INewUserEmailModel {
        data = typeof data === 'object' ? data : {};
        const result = new NewUserEmailModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["role"] = this.role;
        data["email"] = this.email;
        data["association"] = this.association;
        return data;
    }
}

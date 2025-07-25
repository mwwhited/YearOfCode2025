//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveDefinedFilterModel } from "./ISaveDefinedFilterModel";
import { ZSaveDefinedFilterModel } from "./ZSaveDefinedFilterModel";


type integer = number;

export class SaveDefinedFilterModel implements ISaveDefinedFilterModel {
    readonly $schema: typeof ZSaveDefinedFilterModel = ZSaveDefinedFilterModel;
    definedFilterId?: integer | undefined; 
    path?: string | undefined; 
    name?: string | undefined; 
    isActive?: boolean | undefined; 
    state?: string | undefined; 

    constructor(data?: ISaveDefinedFilterModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).definedFilterId = _data["definedFilterId:"];
            (<any>this).path = _data["path:"];
            (<any>this).name = _data["name:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).state = _data["state:"];
        }
    } 
    
    static fromJS(data: any): ISaveDefinedFilterModel {
        data = typeof data === 'object' ? data : {};
        let result = new SaveDefinedFilterModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["definedFilterId"] = this.definedFilterId;
        data["path"] = this.path;
        data["name"] = this.name;
        data["isActive"] = this.isActive;
        data["state"] = this.state;
        return data;
    }

}

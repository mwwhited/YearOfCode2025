//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveDistributorModel } from "./ISaveDistributorModel";
import { ZSaveDistributorModel } from "./ZSaveDistributorModel";


type integer = number;

export class SaveDistributorModel implements ISaveDistributorModel {
    readonly $schema: typeof ZSaveDistributorModel = ZSaveDistributorModel;
    distributorId?: integer | undefined; 
    distributorName?: string | undefined; 
    distributorCode?: string | undefined; 
    isActive?: boolean | undefined; 

    constructor(data?: ISaveDistributorModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).distributorId = _data["distributorId:"];
            (<any>this).distributorName = _data["distributorName:"];
            (<any>this).distributorCode = _data["distributorCode:"];
            (<any>this).isActive = _data["isActive:"];
        }
    } 
    
    static fromJS(data: any): ISaveDistributorModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveDistributorModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["distributorId"] = this.distributorId;
        data["distributorName"] = this.distributorName;
        data["distributorCode"] = this.distributorCode;
        data["isActive"] = this.isActive;
        return data;
    }

}

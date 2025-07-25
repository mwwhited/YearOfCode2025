//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveManufacturerModel } from "./ISaveManufacturerModel";
import { ZSaveManufacturerModel } from "./ZSaveManufacturerModel";

type integer = number;

export class SaveManufacturerModel implements ISaveManufacturerModel {
    readonly $schema: typeof ZSaveManufacturerModel = ZSaveManufacturerModel;
    
    manufacturerId?: integer | undefined;
    manufacturerName?: string | undefined;
    glnNumber?: string | undefined;
    isActive?: boolean | undefined;

    constructor(data?: ISaveManufacturerModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveManufacturerModel>) {
        if (_data) {
            (<any>this).manufacturerId = _data["manufacturerId"];
            (<any>this).manufacturerName = _data["manufacturerName"];
            (<any>this).glnNumber = _data["glnNumber"];
            (<any>this).isActive = _data["isActive"];
        }
    } 
    
    static fromJS(data: Partial<ISaveManufacturerModel>): ISaveManufacturerModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveManufacturerModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["manufacturerId"] = this.manufacturerId;
        data["manufacturerName"] = this.manufacturerName;
        data["glnNumber"] = this.glnNumber;
        data["isActive"] = this.isActive;
        return data;
    }
}

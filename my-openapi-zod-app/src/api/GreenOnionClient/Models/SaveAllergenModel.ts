//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveAllergenModel } from "./ISaveAllergenModel";
import { ZSaveAllergenModel } from "../Schema/ZSaveAllergenModel";

type integer = number;

export class SaveAllergenModel implements ISaveAllergenModel {
    readonly $zod: typeof ZSaveAllergenModel = ZSaveAllergenModel;
    
    allergenId?: integer | undefined;
    allergenName?: string | undefined;
    allergenGroup?: string | undefined;

    constructor(data?: ISaveAllergenModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveAllergenModel>) {
        if (_data) {
            (<any>this).allergenId = _data["allergenId"];
            (<any>this).allergenName = _data["allergenName"];
            (<any>this).allergenGroup = _data["allergenGroup"];
        }
    } 
    
    static fromJS(data: Partial<ISaveAllergenModel>): ISaveAllergenModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveAllergenModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["allergenId"] = this.allergenId;
        data["allergenName"] = this.allergenName;
        data["allergenGroup"] = this.allergenGroup;
        return data;
    }
}

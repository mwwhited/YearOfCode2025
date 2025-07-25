//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryAllergenModel } from "./IQueryAllergenModel";
import { ZQueryAllergenModel } from "./ZQueryAllergenModel";


type integer = number;

export class QueryAllergenModel implements IQueryAllergenModel {
    readonly $schema: typeof ZQueryAllergenModel = ZQueryAllergenModel;
    allergenId?: integer | undefined; 
    allergenName?: string | undefined; 
    allergenGroup?: string | undefined; 

    constructor(data?: IQueryAllergenModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).allergenId = _data["allergenId:"];
            (<any>this).allergenName = _data["allergenName:"];
            (<any>this).allergenGroup = _data["allergenGroup:"];
        }
    } 
    
    static fromJS(data: any): IQueryAllergenModel {
        data = typeof data === 'object' ? data : {};
        let result = new QueryAllergenModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["allergenId"] = this.allergenId;
        data["allergenName"] = this.allergenName;
        data["allergenGroup"] = this.allergenGroup;
        return data;
    }

}

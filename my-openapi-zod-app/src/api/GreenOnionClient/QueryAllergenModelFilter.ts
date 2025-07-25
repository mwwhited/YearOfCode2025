//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryAllergenModelFilter } from "./IQueryAllergenModelFilter";
import { ZQueryAllergenModelFilter } from "./ZQueryAllergenModelFilter";

import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryAllergenModelFilter implements IQueryAllergenModelFilter {
    readonly $schema: typeof ZQueryAllergenModelFilter = ZQueryAllergenModelFilter;
    allergenId?: IFilterParameter | undefined; 
    allergenName?: IFilterParameter | undefined; 
    allergenGroup?: IFilterParameter | undefined; 

    constructor(data?: IQueryAllergenModelFilter) {
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
    
    static fromJS(data: any): IQueryAllergenModelFilter {
        data = typeof data === 'object' ? data : {};
        let result = new QueryAllergenModelFilter();
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

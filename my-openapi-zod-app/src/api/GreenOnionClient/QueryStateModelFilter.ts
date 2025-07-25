//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryStateModelFilter } from "./IQueryStateModelFilter";
import { ZQueryStateModelFilter } from "./ZQueryStateModelFilter";

import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryStateModelFilter implements IQueryStateModelFilter {
    readonly $schema: typeof ZQueryStateModelFilter = ZQueryStateModelFilter;
    stateId?: IFilterParameter | undefined; 
    stateName?: IFilterParameter | undefined; 

    constructor(data?: IQueryStateModelFilter) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).stateId = _data["stateId:"];
            (<any>this).stateName = _data["stateName:"];
        }
    } 
    
    static fromJS(data: any): IQueryStateModelFilter {
        data = typeof data === 'object' ? data : {};
        let result = new QueryStateModelFilter();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["stateId"] = this.stateId;
        data["stateName"] = this.stateName;
        return data;
    }

}

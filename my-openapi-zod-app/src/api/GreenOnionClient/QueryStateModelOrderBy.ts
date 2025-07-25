//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryStateModelOrderBy } from "./IQueryStateModelOrderBy";
import { ZQueryStateModelOrderBy } from "./ZQueryStateModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryStateModelOrderBy implements IQueryStateModelOrderBy {
    readonly $schema: typeof ZQueryStateModelOrderBy = ZQueryStateModelOrderBy;
    stateId?: IOrderDirections | undefined; 
    stateName?: IOrderDirections | undefined; 

    constructor(data?: IQueryStateModelOrderBy) {
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
    
    static fromJS(data: any): IQueryStateModelOrderBy {
        data = typeof data === 'object' ? data : {};
        let result = new QueryStateModelOrderBy();
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

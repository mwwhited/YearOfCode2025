//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryStateModel } from "./IQueryStateModel";
import { ZQueryStateModel } from "./ZQueryStateModel";

type integer = number;

export class QueryStateModel implements IQueryStateModel {
    readonly $zod: typeof ZQueryStateModel = ZQueryStateModel;
    
    stateId?: integer | undefined;
    stateName?: string | undefined;

    constructor(data?: IQueryStateModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryStateModel>) {
        if (_data) {
            (<any>this).stateId = _data["stateId"];
            (<any>this).stateName = _data["stateName"];
        }
    } 
    
    static fromJS(data: Partial<IQueryStateModel>): IQueryStateModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryStateModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["stateId"] = this.stateId;
        data["stateName"] = this.stateName;
        return data;
    }
}

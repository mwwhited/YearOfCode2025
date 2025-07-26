//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryAllergenModelOrderBy } from "./IQueryAllergenModelOrderBy";
import { ZQueryAllergenModelOrderBy } from "../Schema/ZQueryAllergenModelOrderBy";
import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryAllergenModelOrderBy implements IQueryAllergenModelOrderBy {
    readonly $zod: typeof ZQueryAllergenModelOrderBy = ZQueryAllergenModelOrderBy;
    
    allergenId?: IOrderDirections | undefined;
    allergenName?: IOrderDirections | undefined;
    allergenGroup?: IOrderDirections | undefined;

    constructor(data?: IQueryAllergenModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryAllergenModelOrderBy>) {
        if (_data) {
            (<any>this).allergenId = _data["allergenId"];
            (<any>this).allergenName = _data["allergenName"];
            (<any>this).allergenGroup = _data["allergenGroup"];
        }
    } 
    
    static fromJS(data: Partial<IQueryAllergenModelOrderBy>): IQueryAllergenModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryAllergenModelOrderBy();
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

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";


type integer = number;

export class FilterParameter implements IFilterParameter {
    readonly $schema: typeof ZFilterParameter = ZFilterParameter;
    eq?: any | undefined; /* `Equal To`: pass in the value to match for a given property  

If you are using string values you may also use wild cards  
\*bc -> Ends with  
\*b\* -> Contains  
ab\* -> Starts with */
    neq?: any | undefined; /* `Not Equal To`: pass in the value to match for a given property  

If you are using string values you may also use wild cards  
\*bc -> Ends with  
\*b\* -> Contains  
ab\* -> Starts with */
    in?: I[] | undefined; /* This allows for providing a set of values where the value from the queries data must match at least 
one of provided values */
    gt?: any | undefined; /* `Greater than` */
    gte?: any | undefined; /* `Greater than or equal to` */
    lt?: any | undefined; /* `Less than` */
    lte?: any | undefined; /* `Less than or equal to` */

    constructor(data?: IFilterParameter) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).eq = _data["eq:"];
            (<any>this).neq = _data["neq:"];
            (<any>this).in = _data["in:"];
            (<any>this).gt = _data["gt:"];
            (<any>this).gte = _data["gte:"];
            (<any>this).lt = _data["lt:"];
            (<any>this).lte = _data["lte:"];
        }
    } 
    
    static fromJS(data: any): IFilterParameter {
        data = typeof data === 'object' ? data : {};
        let result = new FilterParameter();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["eq"] = this.eq;
        data["neq"] = this.neq;
        data["in"] = this.in;
        data["gt"] = this.gt;
        data["gte"] = this.gte;
        data["lt"] = this.lt;
        data["lte"] = this.lte;
        return data;
    }

}

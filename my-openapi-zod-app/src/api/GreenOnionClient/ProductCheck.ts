//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IProductCheck } from "./IProductCheck";
import { ZProductCheck } from "./ZProductCheck";


type integer = number;

export class ProductCheck implements IProductCheck {
    readonly $schema: typeof ZProductCheck = ZProductCheck;
    ischeck?: boolean | undefined; 
    headerName?: string | undefined; 
    headerValue?: string | undefined; 

    constructor(data?: IProductCheck) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).ischeck = _data["ischeck:"];
            (<any>this).headerName = _data["headerName:"];
            (<any>this).headerValue = _data["headerValue:"];
        }
    } 
    
    static fromJS(data: any): IProductCheck {
        data = typeof data === 'object' ? data : {};
        let result = new ProductCheck();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["ischeck"] = this.ischeck;
        data["headerName"] = this.headerName;
        data["headerValue"] = this.headerValue;
        return data;
    }

}

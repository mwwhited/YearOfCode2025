//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IProductTableField } from "./IProductTableField";
import { ZProductTableField } from "../Schema/ZProductTableField";

type integer = number;

export class ProductTableField implements IProductTableField {
    readonly $zod: typeof ZProductTableField = ZProductTableField;
    
    fieldID?: integer | undefined;
    fieldName?: string | undefined;

    constructor(data?: IProductTableField) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IProductTableField>) {
        if (_data) {
            (<any>this).fieldID = _data["fieldID"];
            (<any>this).fieldName = _data["fieldName"];
        }
    } 
    
    static fromJS(data: Partial<IProductTableField>): IProductTableField {
        data = typeof data === 'object' ? data : {};
        const result = new ProductTableField();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["fieldID"] = this.fieldID;
        data["fieldName"] = this.fieldName;
        return data;
    }
}

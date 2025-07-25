//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IProductGtinAllocationModel } from "./IProductGtinAllocationModel";
import { ZProductGtinAllocationModel } from "./ZProductGtinAllocationModel";


type integer = number;

export class ProductGtinAllocationModel implements IProductGtinAllocationModel {
    readonly $schema: typeof ZProductGtinAllocationModel = ZProductGtinAllocationModel;
    productId?: integer | undefined; 
    gtin?: string | undefined; 
    isActive?: boolean | undefined; 
    createdBy?: integer | undefined; 

    constructor(data?: IProductGtinAllocationModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).productId = _data["productId:"];
            (<any>this).gtin = _data["gtin:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).createdBy = _data["createdBy:"];
        }
    } 
    
    static fromJS(data: any): IProductGtinAllocationModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGtinAllocationModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["productId"] = this.productId;
        data["gtin"] = this.gtin;
        data["isActive"] = this.isActive;
        data["createdBy"] = this.createdBy;
        return data;
    }

}

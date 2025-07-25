//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IProductUpcAllocationModel } from "./IProductUpcAllocationModel";
import { ZProductUpcAllocationModel } from "./ZProductUpcAllocationModel";


type integer = number;

export class ProductUpcAllocationModel implements IProductUpcAllocationModel {
    readonly $schema: typeof ZProductUpcAllocationModel = ZProductUpcAllocationModel;
    productId?: integer | undefined; 
    upc?: string | undefined; 
    isActive?: boolean | undefined; 
    createdBy?: integer | undefined; 

    constructor(data?: IProductUpcAllocationModel) {
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
            (<any>this).upc = _data["upc:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).createdBy = _data["createdBy:"];
        }
    } 
    
    static fromJS(data: any): IProductUpcAllocationModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductUpcAllocationModel();
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
        data["upc"] = this.upc;
        data["isActive"] = this.isActive;
        data["createdBy"] = this.createdBy;
        return data;
    }

}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IApproveSuggestProductRequestModel } from "./IApproveSuggestProductRequestModel";
import { ZApproveSuggestProductRequestModel } from "../Schema/ZApproveSuggestProductRequestModel";

type integer = number;

export class ApproveSuggestProductRequestModel implements IApproveSuggestProductRequestModel {
    readonly $zod: typeof ZApproveSuggestProductRequestModel = ZApproveSuggestProductRequestModel;
    
    productId?: integer | undefined;
    suggestedProductId?: integer | undefined;

    constructor(data?: IApproveSuggestProductRequestModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IApproveSuggestProductRequestModel>) {
        if (_data) {
            (<any>this).productId = _data["productId"];
            (<any>this).suggestedProductId = _data["suggestedProductId"];
        }
    } 
    
    static fromJS(data: Partial<IApproveSuggestProductRequestModel>): IApproveSuggestProductRequestModel {
        data = typeof data === 'object' ? data : {};
        const result = new ApproveSuggestProductRequestModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["productId"] = this.productId;
        data["suggestedProductId"] = this.suggestedProductId;
        return data;
    }
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISuggestedProductRequestModel } from "./ISuggestedProductRequestModel";
import { ZSuggestedProductRequestModel } from "./ZSuggestedProductRequestModel";

type integer = number;

export class SuggestedProductRequestModel implements ISuggestedProductRequestModel {
    readonly $schema: typeof ZSuggestedProductRequestModel = ZSuggestedProductRequestModel;
    
    suggestionId?: integer | undefined;
    productId?: integer | undefined;
    suggestedProductId?: integer | undefined;
    suggestionDate?: string | undefined;
    suggestedByUserId?: integer | undefined;
    isActive?: boolean | undefined;
    suggestedByDistrictId?: integer | undefined;

    constructor(data?: ISuggestedProductRequestModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISuggestedProductRequestModel>) {
        if (_data) {
            (<any>this).suggestionId = _data["suggestionId"];
            (<any>this).productId = _data["productId"];
            (<any>this).suggestedProductId = _data["suggestedProductId"];
            (<any>this).suggestionDate = _data["suggestionDate"];
            (<any>this).suggestedByUserId = _data["suggestedByUserId"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).suggestedByDistrictId = _data["suggestedByDistrictId"];
        }
    } 
    
    static fromJS(data: Partial<ISuggestedProductRequestModel>): ISuggestedProductRequestModel {
        data = typeof data === 'object' ? data : {};
        const result = new SuggestedProductRequestModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["suggestionId"] = this.suggestionId;
        data["productId"] = this.productId;
        data["suggestedProductId"] = this.suggestedProductId;
        data["suggestionDate"] = this.suggestionDate;
        data["suggestedByUserId"] = this.suggestedByUserId;
        data["isActive"] = this.isActive;
        data["suggestedByDistrictId"] = this.suggestedByDistrictId;
        return data;
    }
}

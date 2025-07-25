//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISelectProductSaveCheckListRequestModel } from "./ISelectProductSaveCheckListRequestModel";
import { ZSelectProductSaveCheckListRequestModel } from "./ZSelectProductSaveCheckListRequestModel";

import { ProductCheck } from "./ProductCheck";
import type { IProductCheck } from "./IProductCheck";

type integer = number;

export class SelectProductSaveCheckListRequestModel implements ISelectProductSaveCheckListRequestModel {
    readonly $schema: typeof ZSelectProductSaveCheckListRequestModel = ZSelectProductSaveCheckListRequestModel;
    uniqueExcelFileId?: string | undefined; 
    userOrDistrictId?: integer | undefined; 
    option?: string | undefined; 
    productCheckList?: IProductCheck[] | undefined; 

    constructor(data?: ISelectProductSaveCheckListRequestModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).uniqueExcelFileId = _data["uniqueExcelFileId:"];
            (<any>this).userOrDistrictId = _data["userOrDistrictId:"];
            (<any>this).option = _data["option:"];
            if (Array.isArray(_data["productCheckList"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["productCheckList"])
                    (<any>this).productCheckList!.push(ProductCheck.fromJS(item));
            }
        }
    } 
    
    static fromJS(data: any): ISelectProductSaveCheckListRequestModel {
        data = typeof data === 'object' ? data : {};
        let result = new SelectProductSaveCheckListRequestModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["uniqueExcelFileId"] = this.uniqueExcelFileId;
        data["userOrDistrictId"] = this.userOrDistrictId;
        data["option"] = this.option;
        if (Array.isArray(this.productCheckList)) {
            data["productCheckList"] = [];
            for (let item of this.productCheckList)
                data["productCheckList"].push(item ? item.toJSON() : <any>undefined);
        }
        return data;
    }

}

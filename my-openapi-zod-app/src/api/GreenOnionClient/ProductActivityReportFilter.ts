//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IProductActivityReportFilter } from "./IProductActivityReportFilter";
import { ZProductActivityReportFilter } from "./ZProductActivityReportFilter";


type integer = number;

export class ProductActivityReportFilter implements IProductActivityReportFilter {
    readonly $schema: typeof ZProductActivityReportFilter = ZProductActivityReportFilter;
    pageNumber?: integer | undefined; 
    pageSize?: integer | undefined; 
    schoolDistrictId?: integer | undefined; 
    iocCategoryId?: integer | undefined; 
    userId?: integer | undefined; 
    productId?: integer | undefined; 
    gtin?: string | undefined; 
    upc?: string | undefined; 
    startDate?: string | undefined; 
    endDate?: string | undefined; 
    productGtinId?: integer | undefined; 
    productUpcId?: integer | undefined; 
    cooperative?: string | undefined; 
    manufactureId?: integer | undefined; 

    constructor(data?: IProductActivityReportFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).pageNumber = _data["pageNumber:"];
            (<any>this).pageSize = _data["pageSize:"];
            (<any>this).schoolDistrictId = _data["schoolDistrictId:"];
            (<any>this).iocCategoryId = _data["iocCategoryId:"];
            (<any>this).userId = _data["userId:"];
            (<any>this).productId = _data["productId:"];
            (<any>this).gtin = _data["gtin:"];
            (<any>this).upc = _data["upc:"];
            (<any>this).startDate = _data["startDate:"];
            (<any>this).endDate = _data["endDate:"];
            (<any>this).productGtinId = _data["productGtinId:"];
            (<any>this).productUpcId = _data["productUpcId:"];
            (<any>this).cooperative = _data["cooperative:"];
            (<any>this).manufactureId = _data["manufactureId:"];
        }
    } 
    
    static fromJS(data: any): IProductActivityReportFilter {
        data = typeof data === 'object' ? data : {};
        const result = new ProductActivityReportFilter();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["pageNumber"] = this.pageNumber;
        data["pageSize"] = this.pageSize;
        data["schoolDistrictId"] = this.schoolDistrictId;
        data["iocCategoryId"] = this.iocCategoryId;
        data["userId"] = this.userId;
        data["productId"] = this.productId;
        data["gtin"] = this.gtin;
        data["upc"] = this.upc;
        data["startDate"] = this.startDate;
        data["endDate"] = this.endDate;
        data["productGtinId"] = this.productGtinId;
        data["productUpcId"] = this.productUpcId;
        data["cooperative"] = this.cooperative;
        data["manufactureId"] = this.manufactureId;
        return data;
    }

}

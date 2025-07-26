//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryDistributorModel } from "./IQueryDistributorModel";
import { ZQueryDistributorModel } from "../Schema/ZQueryDistributorModel";

type integer = number;

export class QueryDistributorModel implements IQueryDistributorModel {
    readonly $zod: typeof ZQueryDistributorModel = ZQueryDistributorModel;
    
    distributorId?: integer | undefined;
    distributorName?: string | undefined;
    distributorCode?: string | undefined;
    isActive?: boolean | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    constructor(data?: IQueryDistributorModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryDistributorModel>) {
        if (_data) {
            (<any>this).distributorId = _data["distributorId"];
            (<any>this).distributorName = _data["distributorName"];
            (<any>this).distributorCode = _data["distributorCode"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryDistributorModel>): IQueryDistributorModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryDistributorModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["distributorId"] = this.distributorId;
        data["distributorName"] = this.distributorName;
        data["distributorCode"] = this.distributorCode;
        data["isActive"] = this.isActive;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }
}

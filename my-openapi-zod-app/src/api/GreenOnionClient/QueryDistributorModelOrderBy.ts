//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryDistributorModelOrderBy } from "./IQueryDistributorModelOrderBy";
import { ZQueryDistributorModelOrderBy } from "./ZQueryDistributorModelOrderBy";

import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryDistributorModelOrderBy implements IQueryDistributorModelOrderBy {
    readonly $schema: typeof ZQueryDistributorModelOrderBy = ZQueryDistributorModelOrderBy;
    distributorId?: IOrderDirections | undefined; 
    distributorName?: IOrderDirections | undefined; 
    distributorCode?: IOrderDirections | undefined; 
    isActive?: IOrderDirections | undefined; 
    createdOn?: IOrderDirections | undefined; 
    createdById?: IOrderDirections | undefined; 
    createdBy?: IOrderDirections | undefined; 
    updatedOn?: IOrderDirections | undefined; 
    updatedById?: IOrderDirections | undefined; 
    updatedBy?: IOrderDirections | undefined; 

    constructor(data?: IQueryDistributorModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).distributorId = _data["distributorId:"];
            (<any>this).distributorName = _data["distributorName:"];
            (<any>this).distributorCode = _data["distributorCode:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).createdById = _data["createdById:"];
            (<any>this).createdBy = _data["createdBy:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryDistributorModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryDistributorModelOrderBy();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

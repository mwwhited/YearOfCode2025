//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryDefinedFilterModelOrderBy } from "./IQueryDefinedFilterModelOrderBy";
import { ZQueryDefinedFilterModelOrderBy } from "../Schema/ZQueryDefinedFilterModelOrderBy";
import { OrderDirections } from "./OrderDirections";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export class QueryDefinedFilterModelOrderBy implements IQueryDefinedFilterModelOrderBy {
    readonly $zod: typeof ZQueryDefinedFilterModelOrderBy = ZQueryDefinedFilterModelOrderBy;
    
    definedFilterId?: IOrderDirections | undefined;
    createById?: IOrderDirections | undefined;
    updatedOn?: IOrderDirections | undefined;
    updatedById?: IOrderDirections | undefined;
    updatedBy?: IOrderDirections | undefined;
    createBy?: IOrderDirections | undefined;
    path?: IOrderDirections | undefined;
    name?: IOrderDirections | undefined;
    isActive?: IOrderDirections | undefined;
    createdOn?: IOrderDirections | undefined;
    state?: IOrderDirections | undefined;

    constructor(data?: IQueryDefinedFilterModelOrderBy) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryDefinedFilterModelOrderBy>) {
        if (_data) {
            (<any>this).definedFilterId = _data["definedFilterId"];
            (<any>this).createById = _data["createById"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
            (<any>this).createBy = _data["createBy"];
            (<any>this).path = _data["path"];
            (<any>this).name = _data["name"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).state = _data["state"];
        }
    } 
    
    static fromJS(data: Partial<IQueryDefinedFilterModelOrderBy>): IQueryDefinedFilterModelOrderBy {
        data = typeof data === 'object' ? data : {};
        const result = new QueryDefinedFilterModelOrderBy();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["definedFilterId"] = this.definedFilterId;
        data["createById"] = this.createById;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        data["createBy"] = this.createBy;
        data["path"] = this.path;
        data["name"] = this.name;
        data["isActive"] = this.isActive;
        data["createdOn"] = this.createdOn;
        data["state"] = this.state;
        return data;
    }
}

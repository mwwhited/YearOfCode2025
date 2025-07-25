//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryProductModelSearchQuery } from "./IQueryProductModelSearchQuery";
import { ZQueryProductModelSearchQuery } from "./ZQueryProductModelSearchQuery";
import { QueryProductModelFilter } from "./QueryProductModelFilter";
import type { IQueryProductModelFilter } from "./IQueryProductModelFilter";
import { QueryProductModelOrderBy } from "./QueryProductModelOrderBy";
import type { IQueryProductModelOrderBy } from "./IQueryProductModelOrderBy";

type integer = number;

export class QueryProductModelSearchQuery implements IQueryProductModelSearchQuery {
    readonly $zod: typeof ZQueryProductModelSearchQuery = ZQueryProductModelSearchQuery;
    
    currentPage?: integer | undefined;/*Gets or sets the current page number.*/
    pageSize?: integer | undefined;/***Default size:** `10`, `-1` will disable paging*/
    excludePageCount?: boolean | undefined;/*`true` will disable row/page counts and may decrease processing time without effecting paging functions*/
    searchTerm?: string | undefined;/***Searched Properties:** Name; Description; Gtin; Upc; ManufacturerName; IocCategory; Category; SubCategory; StorageTypeName; Ingredients; CreatedBy; UpdatedBy*/
    filter?: IQueryProductModelFilter | undefined;
    orderBy?: IQueryProductModelOrderBy | undefined;

    constructor(data?: IQueryProductModelSearchQuery) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryProductModelSearchQuery>) {
        if (_data) {
            (<any>this).currentPage = _data["currentPage"];
            (<any>this).pageSize = _data["pageSize"];
            (<any>this).excludePageCount = _data["excludePageCount"];
            (<any>this).searchTerm = _data["searchTerm"];
            (<any>this).filter = _data["filter"];
            (<any>this).orderBy = _data["orderBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryProductModelSearchQuery>): IQueryProductModelSearchQuery {
        data = typeof data === 'object' ? data : {};
        const result = new QueryProductModelSearchQuery();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["currentPage"] = this.currentPage;
        data["pageSize"] = this.pageSize;
        data["excludePageCount"] = this.excludePageCount;
        data["searchTerm"] = this.searchTerm;
        data["filter"] = this.filter;
        data["orderBy"] = this.orderBy;
        return data;
    }
}

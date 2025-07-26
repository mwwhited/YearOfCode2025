//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IQueryStorageTypeModelSearchQuery } from "./IQueryStorageTypeModelSearchQuery";
import { ZQueryStorageTypeModelSearchQuery } from "../Schema/ZQueryStorageTypeModelSearchQuery";
import { QueryStorageTypeModelFilter } from "./QueryStorageTypeModelFilter";
import type { IQueryStorageTypeModelFilter } from "./IQueryStorageTypeModelFilter";
import { QueryStorageTypeModelOrderBy } from "./QueryStorageTypeModelOrderBy";
import type { IQueryStorageTypeModelOrderBy } from "./IQueryStorageTypeModelOrderBy";

type integer = number;

export class QueryStorageTypeModelSearchQuery implements IQueryStorageTypeModelSearchQuery {
    readonly $zod: typeof ZQueryStorageTypeModelSearchQuery = ZQueryStorageTypeModelSearchQuery;
    
    currentPage?: integer | undefined;/*Gets or sets the current page number.*/
    pageSize?: integer | undefined;/***Default size:** `10`, `-1` will disable paging*/
    excludePageCount?: boolean | undefined;/*`true` will disable row/page counts and may decrease processing time without effecting paging functions*/
    searchTerm?: string | undefined;/***Searched Properties:** StorageTypeName*/
    filter?: IQueryStorageTypeModelFilter | undefined;
    orderBy?: IQueryStorageTypeModelOrderBy | undefined;

    constructor(data?: IQueryStorageTypeModelSearchQuery) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryStorageTypeModelSearchQuery>) {
        if (_data) {
            (<any>this).currentPage = _data["currentPage"];
            (<any>this).pageSize = _data["pageSize"];
            (<any>this).excludePageCount = _data["excludePageCount"];
            (<any>this).searchTerm = _data["searchTerm"];
            (<any>this).filter = _data["filter"];
            (<any>this).orderBy = _data["orderBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryStorageTypeModelSearchQuery>): IQueryStorageTypeModelSearchQuery {
        data = typeof data === 'object' ? data : {};
        const result = new QueryStorageTypeModelSearchQuery();
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

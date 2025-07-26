//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryUserModelSearchQuery } from "./IQueryUserModelSearchQuery";
import { ZQueryUserModelSearchQuery } from "../Schema/ZQueryUserModelSearchQuery";
import { QueryUserModelFilter } from "./QueryUserModelFilter";
import type { IQueryUserModelFilter } from "./IQueryUserModelFilter";
import { QueryUserModelOrderBy } from "./QueryUserModelOrderBy";
import type { IQueryUserModelOrderBy } from "./IQueryUserModelOrderBy";

type integer = number;

export class QueryUserModelSearchQuery implements IQueryUserModelSearchQuery {
    readonly $zod: typeof ZQueryUserModelSearchQuery = ZQueryUserModelSearchQuery;
    
    currentPage?: integer | undefined;/*Gets or sets the current page number.*/
    pageSize?: integer | undefined;/***Default size:** `10`, `-1` will disable paging*/
    excludePageCount?: boolean | undefined;/*`true` will disable row/page counts and may decrease processing time without effecting paging functions*/
    searchTerm?: string | undefined;/***Searched Properties:** FirstName; LastName; Email; Mobile; AddressLine1; AddressLine2; City; Country; ZipCode; State; RoleName; SchoolDistrictName; ManufacturerName; CreatedBy; UpdatedBy*/
    filter?: IQueryUserModelFilter | undefined;
    orderBy?: IQueryUserModelOrderBy | undefined;

    constructor(data?: IQueryUserModelSearchQuery) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryUserModelSearchQuery>) {
        if (_data) {
            (<any>this).currentPage = _data["currentPage"];
            (<any>this).pageSize = _data["pageSize"];
            (<any>this).excludePageCount = _data["excludePageCount"];
            (<any>this).searchTerm = _data["searchTerm"];
            (<any>this).filter = _data["filter"];
            (<any>this).orderBy = _data["orderBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryUserModelSearchQuery>): IQueryUserModelSearchQuery {
        data = typeof data === 'object' ? data : {};
        const result = new QueryUserModelSearchQuery();
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

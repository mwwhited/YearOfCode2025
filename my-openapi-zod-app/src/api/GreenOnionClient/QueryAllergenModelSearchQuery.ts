//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryAllergenModelSearchQuery } from "./IQueryAllergenModelSearchQuery";
import { ZQueryAllergenModelSearchQuery } from "./ZQueryAllergenModelSearchQuery";

import { QueryAllergenModelFilter } from "./QueryAllergenModelFilter";
import type { IQueryAllergenModelFilter } from "./IQueryAllergenModelFilter";
import { QueryAllergenModelOrderBy } from "./QueryAllergenModelOrderBy";
import type { IQueryAllergenModelOrderBy } from "./IQueryAllergenModelOrderBy";

type integer = number;

export class QueryAllergenModelSearchQuery implements IQueryAllergenModelSearchQuery {
    readonly $schema: typeof ZQueryAllergenModelSearchQuery = ZQueryAllergenModelSearchQuery;
    currentPage?: integer | undefined; /* Gets or sets the current page number. */
    pageSize?: integer | undefined; /* **Default size:** `10`, `-1` will disable paging */
    excludePageCount?: boolean | undefined; /* `true` will disable row/page counts and may decrease processing time without effecting paging functions */
    searchTerm?: string | undefined; /* **Searched Properties:** AllergenName; AllergenGroup */
    filter?: IQueryAllergenModelFilter | undefined; 
    orderBy?: IQueryAllergenModelOrderBy | undefined; 

    constructor(data?: IQueryAllergenModelSearchQuery) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).currentPage = _data["currentPage:"];
            (<any>this).pageSize = _data["pageSize:"];
            (<any>this).excludePageCount = _data["excludePageCount:"];
            (<any>this).searchTerm = _data["searchTerm:"];
            (<any>this).filter = _data["filter:"];
            (<any>this).orderBy = _data["orderBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryAllergenModelSearchQuery {
        data = typeof data === 'object' ? data : {};
        const result = new QueryAllergenModelSearchQuery();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
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

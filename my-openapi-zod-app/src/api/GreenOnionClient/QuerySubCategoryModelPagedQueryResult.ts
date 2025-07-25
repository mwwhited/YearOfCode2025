//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQuerySubCategoryModelPagedQueryResult } from "./IQuerySubCategoryModelPagedQueryResult";
import { ZQuerySubCategoryModelPagedQueryResult } from "./ZQuerySubCategoryModelPagedQueryResult";

import { QuerySubCategoryModel } from "./QuerySubCategoryModel";
import type { IQuerySubCategoryModel } from "./IQuerySubCategoryModel";
import { ResultMessage } from "./ResultMessage";
import type { IResultMessage } from "./IResultMessage";

type integer = number;

export class QuerySubCategoryModelPagedQueryResult implements IQuerySubCategoryModelPagedQueryResult {
    readonly $schema: typeof ZQuerySubCategoryModelPagedQueryResult = ZQuerySubCategoryModelPagedQueryResult;
    rows?: IQuerySubCategoryModel[] | undefined; /* Gets the collection of items in the result. */
    messages?: IResultMessage[] | undefined; /* Gets or sets the collection of result messages associated with the query result. */
    currentPage?: integer | undefined; /* Gets the total number of pages. */
    totalPageCount?: integer | undefined; /* Gets the total number of pages. */
    totalRowCount?: integer | undefined; /* Gets the total number of rows. */

    constructor(data?: IQuerySubCategoryModelPagedQueryResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["rows"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["rows"])
                    (<any>this).rows!.push(QuerySubCategoryModel.fromJS(item));
            }
            if (Array.isArray(_data["messages"])) {
                (<any>this).rows = [] as any;
                for (let item of _data["messages"])
                    (<any>this).messages!.push(ResultMessage.fromJS(item));
            }
            (<any>this).currentPage = _data["currentPage:"];
            (<any>this).totalPageCount = _data["totalPageCount:"];
            (<any>this).totalRowCount = _data["totalRowCount:"];
        }
    } 
    
    static fromJS(data: any): IQuerySubCategoryModelPagedQueryResult {
        data = typeof data === 'object' ? data : {};
        let result = new QuerySubCategoryModelPagedQueryResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        if (Array.isArray(this.rows)) {
            data["rows"] = [];
            for (let item of this.rows)
                data["rows"].push(item ? item.toJSON() : <any>undefined);
        }
        if (Array.isArray(this.messages)) {
            data["messages"] = [];
            for (let item of this.messages)
                data["messages"].push(item ? item.toJSON() : <any>undefined);
        }
        data["currentPage"] = this.currentPage;
        data["totalPageCount"] = this.totalPageCount;
        data["totalRowCount"] = this.totalRowCount;
        return data;
    }

}

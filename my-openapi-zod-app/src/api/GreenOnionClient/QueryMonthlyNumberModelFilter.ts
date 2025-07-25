//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryMonthlyNumberModelFilter } from "./IQueryMonthlyNumberModelFilter";
import { ZQueryMonthlyNumberModelFilter } from "./ZQueryMonthlyNumberModelFilter";

import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QueryMonthlyNumberModelFilter implements IQueryMonthlyNumberModelFilter {
    readonly $schema: typeof ZQueryMonthlyNumberModelFilter = ZQueryMonthlyNumberModelFilter;
    id?: IFilterParameter | undefined; 
    schoolDistrictId?: IFilterParameter | undefined; 
    monthId?: IFilterParameter | undefined; 
    actualMonthId?: IFilterParameter | undefined; 
    year?: IFilterParameter | undefined; 
    enrollment?: IFilterParameter | undefined; 
    numberOfSites?: IFilterParameter | undefined; 
    numberOfDistricts?: IFilterParameter | undefined; 
    mealsServed?: IFilterParameter | undefined; 
    freeAndReducedPercent?: IFilterParameter | undefined; 
    isActive?: IFilterParameter | undefined; 
    regDate?: IFilterParameter | undefined; 
    createdOn?: IFilterParameter | undefined; 
    createdById?: IFilterParameter | undefined; 
    createdBy?: IFilterParameter | undefined; 
    updatedOn?: IFilterParameter | undefined; 
    updatedById?: IFilterParameter | undefined; 
    updatedBy?: IFilterParameter | undefined; 

    constructor(data?: IQueryMonthlyNumberModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id:"];
            (<any>this).schoolDistrictId = _data["schoolDistrictId:"];
            (<any>this).monthId = _data["monthId:"];
            (<any>this).actualMonthId = _data["actualMonthId:"];
            (<any>this).year = _data["year:"];
            (<any>this).enrollment = _data["enrollment:"];
            (<any>this).numberOfSites = _data["numberOfSites:"];
            (<any>this).numberOfDistricts = _data["numberOfDistricts:"];
            (<any>this).mealsServed = _data["mealsServed:"];
            (<any>this).freeAndReducedPercent = _data["freeAndReducedPercent:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).regDate = _data["regDate:"];
            (<any>this).createdOn = _data["createdOn:"];
            (<any>this).createdById = _data["createdById:"];
            (<any>this).createdBy = _data["createdBy:"];
            (<any>this).updatedOn = _data["updatedOn:"];
            (<any>this).updatedById = _data["updatedById:"];
            (<any>this).updatedBy = _data["updatedBy:"];
        }
    } 
    
    static fromJS(data: any): IQueryMonthlyNumberModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QueryMonthlyNumberModelFilter();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["id"] = this.id;
        data["schoolDistrictId"] = this.schoolDistrictId;
        data["monthId"] = this.monthId;
        data["actualMonthId"] = this.actualMonthId;
        data["year"] = this.year;
        data["enrollment"] = this.enrollment;
        data["numberOfSites"] = this.numberOfSites;
        data["numberOfDistricts"] = this.numberOfDistricts;
        data["mealsServed"] = this.mealsServed;
        data["freeAndReducedPercent"] = this.freeAndReducedPercent;
        data["isActive"] = this.isActive;
        data["regDate"] = this.regDate;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }

}

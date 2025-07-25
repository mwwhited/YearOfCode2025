//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQueryMonthlyNumberModel } from "./IQueryMonthlyNumberModel";
import { ZQueryMonthlyNumberModel } from "./ZQueryMonthlyNumberModel";

type integer = number;

export class QueryMonthlyNumberModel implements IQueryMonthlyNumberModel {
    readonly $zod: typeof ZQueryMonthlyNumberModel = ZQueryMonthlyNumberModel;
    
    id?: integer | undefined;
    schoolDistrictId?: integer | undefined;
    monthId?: integer | undefined;
    actualMonthId?: integer | undefined;
    year?: string | undefined;
    enrollment?: integer | undefined;
    numberOfSites?: integer | undefined;
    numberOfDistricts?: integer | undefined;
    mealsServed?: integer | undefined;
    freeAndReducedPercent?: integer | undefined;
    isActive?: boolean | undefined;
    regDate?: string | undefined;
    createdOn?: string | undefined;
    createdById?: integer | undefined;
    createdBy?: string | undefined;
    updatedOn?: string | undefined;
    updatedById?: integer | undefined;
    updatedBy?: string | undefined;

    constructor(data?: IQueryMonthlyNumberModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQueryMonthlyNumberModel>) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).schoolDistrictId = _data["schoolDistrictId"];
            (<any>this).monthId = _data["monthId"];
            (<any>this).actualMonthId = _data["actualMonthId"];
            (<any>this).year = _data["year"];
            (<any>this).enrollment = _data["enrollment"];
            (<any>this).numberOfSites = _data["numberOfSites"];
            (<any>this).numberOfDistricts = _data["numberOfDistricts"];
            (<any>this).mealsServed = _data["mealsServed"];
            (<any>this).freeAndReducedPercent = _data["freeAndReducedPercent"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).regDate = _data["regDate"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQueryMonthlyNumberModel>): IQueryMonthlyNumberModel {
        data = typeof data === 'object' ? data : {};
        const result = new QueryMonthlyNumberModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
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

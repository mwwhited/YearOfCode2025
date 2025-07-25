//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IQuerySchoolDistrictModelFilter } from "./IQuerySchoolDistrictModelFilter";
import { ZQuerySchoolDistrictModelFilter } from "./ZQuerySchoolDistrictModelFilter";
import { FilterParameter } from "./FilterParameter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export class QuerySchoolDistrictModelFilter implements IQuerySchoolDistrictModelFilter {
    readonly $zod: typeof ZQuerySchoolDistrictModelFilter = ZQuerySchoolDistrictModelFilter;
    
    schoolDistrictId?: IFilterParameter | undefined;
    siteCode?: IFilterParameter | undefined;
    districtName?: IFilterParameter | undefined;
    phoneNumber?: IFilterParameter | undefined;
    email?: IFilterParameter | undefined;
    country?: IFilterParameter | undefined;
    stateId?: IFilterParameter | undefined;
    state?: IFilterParameter | undefined;
    city?: IFilterParameter | undefined;
    districtLogo?: IFilterParameter | undefined;
    isActive?: IFilterParameter | undefined;
    foodServiceOptions?: IFilterParameter | undefined;
    contractCompany?: IFilterParameter | undefined;
    isSchoolCoopMember?: IFilterParameter | undefined;
    isSchoolCoop?: IFilterParameter | undefined;
    schoolCoopId?: IFilterParameter | undefined;
    schoolCoopName?: IFilterParameter | undefined;
    createdOn?: IFilterParameter | undefined;
    createdById?: IFilterParameter | undefined;
    createdBy?: IFilterParameter | undefined;
    updatedOn?: IFilterParameter | undefined;
    updatedById?: IFilterParameter | undefined;
    updatedBy?: IFilterParameter | undefined;

    constructor(data?: IQuerySchoolDistrictModelFilter) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IQuerySchoolDistrictModelFilter>) {
        if (_data) {
            (<any>this).schoolDistrictId = _data["schoolDistrictId"];
            (<any>this).siteCode = _data["siteCode"];
            (<any>this).districtName = _data["districtName"];
            (<any>this).phoneNumber = _data["phoneNumber"];
            (<any>this).email = _data["email"];
            (<any>this).country = _data["country"];
            (<any>this).stateId = _data["stateId"];
            (<any>this).state = _data["state"];
            (<any>this).city = _data["city"];
            (<any>this).districtLogo = _data["districtLogo"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).foodServiceOptions = _data["foodServiceOptions"];
            (<any>this).contractCompany = _data["contractCompany"];
            (<any>this).isSchoolCoopMember = _data["isSchoolCoopMember"];
            (<any>this).isSchoolCoop = _data["isSchoolCoop"];
            (<any>this).schoolCoopId = _data["schoolCoopId"];
            (<any>this).schoolCoopName = _data["schoolCoopName"];
            (<any>this).createdOn = _data["createdOn"];
            (<any>this).createdById = _data["createdById"];
            (<any>this).createdBy = _data["createdBy"];
            (<any>this).updatedOn = _data["updatedOn"];
            (<any>this).updatedById = _data["updatedById"];
            (<any>this).updatedBy = _data["updatedBy"];
        }
    } 
    
    static fromJS(data: Partial<IQuerySchoolDistrictModelFilter>): IQuerySchoolDistrictModelFilter {
        data = typeof data === 'object' ? data : {};
        const result = new QuerySchoolDistrictModelFilter();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["schoolDistrictId"] = this.schoolDistrictId;
        data["siteCode"] = this.siteCode;
        data["districtName"] = this.districtName;
        data["phoneNumber"] = this.phoneNumber;
        data["email"] = this.email;
        data["country"] = this.country;
        data["stateId"] = this.stateId;
        data["state"] = this.state;
        data["city"] = this.city;
        data["districtLogo"] = this.districtLogo;
        data["isActive"] = this.isActive;
        data["foodServiceOptions"] = this.foodServiceOptions;
        data["contractCompany"] = this.contractCompany;
        data["isSchoolCoopMember"] = this.isSchoolCoopMember;
        data["isSchoolCoop"] = this.isSchoolCoop;
        data["schoolCoopId"] = this.schoolCoopId;
        data["schoolCoopName"] = this.schoolCoopName;
        data["createdOn"] = this.createdOn;
        data["createdById"] = this.createdById;
        data["createdBy"] = this.createdBy;
        data["updatedOn"] = this.updatedOn;
        data["updatedById"] = this.updatedById;
        data["updatedBy"] = this.updatedBy;
        return data;
    }
}

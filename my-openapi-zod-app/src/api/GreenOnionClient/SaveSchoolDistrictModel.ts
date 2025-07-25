//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveSchoolDistrictModel } from "./ISaveSchoolDistrictModel";
import { ZSaveSchoolDistrictModel } from "./ZSaveSchoolDistrictModel";


type integer = number;

export class SaveSchoolDistrictModel implements ISaveSchoolDistrictModel {
    readonly $schema: typeof ZSaveSchoolDistrictModel = ZSaveSchoolDistrictModel;
    schoolDistrictId?: integer | undefined; 
    siteCode?: string | undefined; 
    districtName?: string | undefined; 
    phoneNumber?: string | undefined; 
    email?: string | undefined; 
    country?: string | undefined; 
    state?: integer | undefined; 
    city?: string | undefined; 
    districtLogo?: string | undefined; 
    isActive?: boolean | undefined; 
    foodServiceOptions?: string | undefined; 
    contractCompany?: string | undefined; 
    isSchoolCoop?: boolean | undefined; 
    schoolCoopId?: integer | undefined; 

    constructor(data?: ISaveSchoolDistrictModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).schoolDistrictId = _data["schoolDistrictId:"];
            (<any>this).siteCode = _data["siteCode:"];
            (<any>this).districtName = _data["districtName:"];
            (<any>this).phoneNumber = _data["phoneNumber:"];
            (<any>this).email = _data["email:"];
            (<any>this).country = _data["country:"];
            (<any>this).state = _data["state:"];
            (<any>this).city = _data["city:"];
            (<any>this).districtLogo = _data["districtLogo:"];
            (<any>this).isActive = _data["isActive:"];
            (<any>this).foodServiceOptions = _data["foodServiceOptions:"];
            (<any>this).contractCompany = _data["contractCompany:"];
            (<any>this).isSchoolCoop = _data["isSchoolCoop:"];
            (<any>this).schoolCoopId = _data["schoolCoopId:"];
        }
    } 
    
    static fromJS(data: any): ISaveSchoolDistrictModel {
        data = typeof data === 'object' ? data : {};
        let result = new SaveSchoolDistrictModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["schoolDistrictId"] = this.schoolDistrictId;
        data["siteCode"] = this.siteCode;
        data["districtName"] = this.districtName;
        data["phoneNumber"] = this.phoneNumber;
        data["email"] = this.email;
        data["country"] = this.country;
        data["state"] = this.state;
        data["city"] = this.city;
        data["districtLogo"] = this.districtLogo;
        data["isActive"] = this.isActive;
        data["foodServiceOptions"] = this.foodServiceOptions;
        data["contractCompany"] = this.contractCompany;
        data["isSchoolCoop"] = this.isSchoolCoop;
        data["schoolCoopId"] = this.schoolCoopId;
        return data;
    }

}

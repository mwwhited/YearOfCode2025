//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { ISaveMonthlyNumberModel } from "./ISaveMonthlyNumberModel";
import { ZSaveMonthlyNumberModel } from "./ZSaveMonthlyNumberModel";

type integer = number;

export class SaveMonthlyNumberModel implements ISaveMonthlyNumberModel {
    readonly $schema: typeof ZSaveMonthlyNumberModel = ZSaveMonthlyNumberModel;
    
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

    constructor(data?: ISaveMonthlyNumberModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISaveMonthlyNumberModel>) {
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
        }
    } 
    
    static fromJS(data: Partial<ISaveMonthlyNumberModel>): ISaveMonthlyNumberModel {
        data = typeof data === 'object' ? data : {};
        const result = new SaveMonthlyNumberModel();
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
        return data;
    }
}

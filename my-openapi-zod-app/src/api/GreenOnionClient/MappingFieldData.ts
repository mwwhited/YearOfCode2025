//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IMappingFieldData } from "./IMappingFieldData";
import { ZMappingFieldData } from "./ZMappingFieldData";


type integer = number;

export class MappingFieldData implements IMappingFieldData {
    readonly $schema: typeof ZMappingFieldData = ZMappingFieldData;
    mappingID?: integer | undefined; 
    isChecked?: boolean | undefined; 
    fileFieldName?: string | undefined; 
    tableFieldID?: string | undefined; 
    tableFieldName?: string | undefined; 

    constructor(data?: IMappingFieldData) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: any) {
        if (_data) {
            (<any>this).mappingID = _data["mappingID:"];
            (<any>this).isChecked = _data["isChecked:"];
            (<any>this).fileFieldName = _data["fileFieldName:"];
            (<any>this).tableFieldID = _data["tableFieldID:"];
            (<any>this).tableFieldName = _data["tableFieldName:"];
        }
    } 
    
    static fromJS(data: any): IMappingFieldData {
        data = typeof data === 'object' ? data : {};
        const result = new MappingFieldData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["mappingID"] = this.mappingID;
        data["isChecked"] = this.isChecked;
        data["fileFieldName"] = this.fileFieldName;
        data["tableFieldID"] = this.tableFieldID;
        data["tableFieldName"] = this.tableFieldName;
        return data;
    }

}

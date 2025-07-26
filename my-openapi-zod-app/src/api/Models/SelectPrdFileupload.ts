//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { ISelectPrdFileupload } from "./ISelectPrdFileupload";
import { ZSelectPrdFileupload } from "../Schema/ZSelectPrdFileupload";

type integer = number;

export class SelectPrdFileupload implements ISelectPrdFileupload {
    readonly $zod: typeof ZSelectPrdFileupload = ZSelectPrdFileupload;
    
    importFile?: string | undefined;

    constructor(data?: ISelectPrdFileupload) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<ISelectPrdFileupload>) {
        if (_data) {
            (<any>this).importFile = _data["importFile"];
        }
    } 
    
    static fromJS(data: Partial<ISelectPrdFileupload>): ISelectPrdFileupload {
        data = typeof data === 'object' ? data : {};
        const result = new SelectPrdFileupload();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["importFile"] = this.importFile;
        return data;
    }
}

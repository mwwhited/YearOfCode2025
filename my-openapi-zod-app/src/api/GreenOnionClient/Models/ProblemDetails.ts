//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IProblemDetails } from "./IProblemDetails";
import { ZProblemDetails } from "../Schema/ZProblemDetails";

type integer = number;

export class ProblemDetails implements IProblemDetails {
    readonly $zod: typeof ZProblemDetails = ZProblemDetails;
    
    type?: string | undefined;
    title?: string | undefined;
    status?: integer | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    constructor(data?: IProblemDetails) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IProblemDetails>) {
        if (_data) {
            (<any>this).type = _data["type"];
            (<any>this).title = _data["title"];
            (<any>this).status = _data["status"];
            (<any>this).detail = _data["detail"];
            (<any>this).instance = _data["instance"];
        }
    } 
    
    static fromJS(data: Partial<IProblemDetails>): IProblemDetails {
        data = typeof data === 'object' ? data : {};
        const result = new ProblemDetails();
        result.init(data);
        return result;
    }

    [key: string]: unknown; // Additional properties are allowed

    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["type"] = this.type;
        data["title"] = this.title;
        data["status"] = this.status;
        data["detail"] = this.detail;
        data["instance"] = this.instance;
        return data;
    }
}

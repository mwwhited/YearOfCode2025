//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IContentReference } from "./IContentReference";
import { ZContentReference } from "./ZContentReference";

type integer = number;

export class ContentReference implements IContentReference {
    readonly $schema: typeof ZContentReference = ZContentReference;
    
    content?: string | undefined;/*Gets or initializes the content type of the content.*/
    contentType?: string | undefined;/*Gets or initializes the content type of the content.*/
    fileName?: string | undefined;/*Gets or initializes the file name associated with the content.*/

    constructor(data?: IContentReference) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IContentReference>) {
        if (_data) {
            (<any>this).content = _data["content"];
            (<any>this).contentType = _data["contentType"];
            (<any>this).fileName = _data["fileName"];
        }
    } 
    
    static fromJS(data: Partial<IContentReference>): IContentReference {
        data = typeof data === 'object' ? data : {};
        const result = new ContentReference();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["content"] = this.content;
        data["contentType"] = this.contentType;
        data["fileName"] = this.fileName;
        return data;
    }
}

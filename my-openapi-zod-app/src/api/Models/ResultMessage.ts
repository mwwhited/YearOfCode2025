//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IResultMessage } from "./IResultMessage";
import { ZResultMessage } from "../Schema/ZResultMessage";
import { MessageLevels } from "./MessageLevels";
import type { IMessageLevels } from "./IMessageLevels";

type integer = number;

export class ResultMessage implements IResultMessage {
    readonly $zod: typeof ZResultMessage = ZResultMessage;
    
    level?: IMessageLevels | undefined;
    message?: string | undefined;/*Simple English message about issue.*/
    messageCode?: string | undefined;/*unique code that may be used to assist in translating issue*/
    context?: string | undefined;/*Property or path related to this message*/
    metaData?: unknown | undefined;/*additional properties related to response*/

    constructor(data?: IResultMessage) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IResultMessage>) {
        if (_data) {
            (<any>this).level = _data["level"];
            (<any>this).message = _data["message"];
            (<any>this).messageCode = _data["messageCode"];
            (<any>this).context = _data["context"];
            (<any>this).metaData = _data["metaData"];
        }
    } 
    
    static fromJS(data: Partial<IResultMessage>): IResultMessage {
        data = typeof data === 'object' ? data : {};
        const result = new ResultMessage();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["level"] = this.level;
        data["message"] = this.message;
        data["messageCode"] = this.messageCode;
        data["context"] = this.context;
        data["metaData"] = this.metaData;
        return data;
    }
}

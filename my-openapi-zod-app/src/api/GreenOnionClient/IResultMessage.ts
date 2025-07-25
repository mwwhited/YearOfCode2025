//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZResultMessage } from "./ZResultMessage";
import type { IMessageLevels } from "./IMessageLevels";

type integer = number;

export interface IResultMessage {
    $schema: typeof ZResultMessage;

    level?: IMessageLevels | undefined;
    message?: string | undefined;/*Simple English message about issue.*/
    messageCode?: string | undefined;/*unique code that may be used to assist in translating issue*/
    context?: string | undefined;/*Property or path related to this message*/
    metaData?: unknown | undefined;/*additional properties related to response*/

    toJSON(data?: any) : any;
}

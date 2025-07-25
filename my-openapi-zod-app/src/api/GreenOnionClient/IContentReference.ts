//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZContentReference } from "./ZContentReference";

type integer = number;

export interface IContentReference {
    $schema: typeof ZContentReference;

    content?: string | undefined; /* Gets or initializes the content type of the content. */
    contentType?: string | undefined; /* Gets or initializes the content type of the content. */
    fileName?: string | undefined; /* Gets or initializes the file name associated with the content. */

    toJSON(data?: any) : any;
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IContentReference } from "./IContentReference";


export const ZContentReference: z.ZodType<IContentReference> = z.object({
    content: z.string(),
    contentType: z.string(),
    fileName: z.string(),
});
/*
[class, ContentReference],[interface, IContentReference],[schema, ZContentReference],[definition, {
        "required": [
          "content",
          "contentType",
          "fileName"
        ],
        "type": "object",
        "properties": {
          "content": {
            "type": "string",
            "description": "Gets or initializes the content type of the content.",
            "format": "binary",
            "nullable": true
          },
          "contentType": {
            "type": "string",
            "description": "Gets or initializes the content type of the content.",
            "nullable": true
          },
          "fileName": {
            "type": "string",
            "description": "Gets or initializes the file name associated with the content.",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Represents a content reference containing information about content such as a stream, content type, and file name."
      }]
*/

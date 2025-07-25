//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZContentReference = z.object({
    content:z.string().optional().describe("Gets or initializes the content type of the content."),
    contentType:z.string().optional().describe("Gets or initializes the content type of the content."),
    fileName:z.string().optional().describe("Gets or initializes the file name associated with the content."),
});


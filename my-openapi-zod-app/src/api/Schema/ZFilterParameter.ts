//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";

export const ZFilterParameter = z.object({
    eq:z.unknown().optional().describe(```Equal To``: pass in the value to match for a given property  

If you are using string values you may also use wild cards  
\*bc -> Ends with  
\*b\* -> Contains  
ab\* -> Starts with`),
    neq:z.unknown().optional().describe(```Not Equal To``: pass in the value to match for a given property  

If you are using string values you may also use wild cards  
\*bc -> Ends with  
\*b\* -> Contains  
ab\* -> Starts with`),
    in:z.array(z.unknown()).optional().describe(`This allows for providing a set of values where the value from the queries data must match at least 
one of provided values`),
    gt:z.unknown().optional().describe(```Greater than```),
    gte:z.unknown().optional().describe(```Greater than or equal to```),
    lt:z.unknown().optional().describe(```Less than```),
    lte:z.unknown().optional().describe(```Less than or equal to```),
});

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZFilterParameter } from "./ZFilterParameter";

type integer = number;

export interface IFilterParameter {
    $schema: typeof ZFilterParameter;

    eq?: unknown | undefined;/*`Equal To`: pass in the value to match for a given property  

If you are using string values you may also use wild cards  
\*bc -> Ends with  
\*b\* -> Contains  
ab\* -> Starts with*/
    neq?: unknown | undefined;/*`Not Equal To`: pass in the value to match for a given property  

If you are using string values you may also use wild cards  
\*bc -> Ends with  
\*b\* -> Contains  
ab\* -> Starts with*/
    in?: unknown[] | undefined;/*This allows for providing a set of values where the value from the queries data must match at least 
one of provided values*/
    gt?: unknown | undefined;/*`Greater than`*/
    gte?: unknown | undefined;/*`Greater than or equal to`*/
    lt?: unknown | undefined;/*`Less than`*/
    lte?: unknown | undefined;/*`Less than or equal to`*/

    toJSON(data?: any) : any;
}

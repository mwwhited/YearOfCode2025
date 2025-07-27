//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

// Models 
import type {
 } from "./Models";
 
export type {
 };

export default interface IApiHealthClient {
    /**
    * @operationId Health
    * @tag ApiHealth
    * @path /health 
    */
    Health(): Promise<object | undefined>;
}
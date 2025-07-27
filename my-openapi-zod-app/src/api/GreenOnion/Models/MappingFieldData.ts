//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZMappingFieldData from "../Schema/ZMappingFieldData";
type MappingFieldData = z.infer<typeof ZMappingFieldData>;
interface IMappingFieldData extends MappingFieldData {
  $zod: typeof ZMappingFieldData;
}
export type { MappingFieldData, IMappingFieldData };
export { ZMappingFieldData };
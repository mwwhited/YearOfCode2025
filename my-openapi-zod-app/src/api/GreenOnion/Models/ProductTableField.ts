//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZProductTableField from "../Schema/ZProductTableField";
type ProductTableField = z.infer<typeof ZProductTableField>;
interface IProductTableField extends ProductTableField {
  $zod: typeof ZProductTableField;
}
export type { ProductTableField, IProductTableField };
export { ZProductTableField };
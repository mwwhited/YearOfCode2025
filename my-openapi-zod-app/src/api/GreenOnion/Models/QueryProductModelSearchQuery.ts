//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryProductModelSearchQuery from "../Schema/ZQueryProductModelSearchQuery";
type QueryProductModelSearchQuery = z.infer<typeof ZQueryProductModelSearchQuery>;
interface IQueryProductModelSearchQuery extends QueryProductModelSearchQuery {
  $zod: typeof ZQueryProductModelSearchQuery;
}
export type { QueryProductModelSearchQuery, IQueryProductModelSearchQuery };
export { ZQueryProductModelSearchQuery };
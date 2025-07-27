//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryStateModelSearchQuery from "../Schema/ZQueryStateModelSearchQuery";
type QueryStateModelSearchQuery = z.infer<typeof ZQueryStateModelSearchQuery>;
interface IQueryStateModelSearchQuery extends QueryStateModelSearchQuery {
  $zod: typeof ZQueryStateModelSearchQuery;
}
export type { QueryStateModelSearchQuery, IQueryStateModelSearchQuery };
export { ZQueryStateModelSearchQuery };
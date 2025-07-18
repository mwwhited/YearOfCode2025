import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

// Custom datetime schema that handles non-standard formats
const customDatetimeSchema = z.preprocess((val) => {
  if (typeof val === "string") {
    // Handle various datetime formats including "2023-07-26T04:32:01.69"
    const cleaned = val.replace(/\.\d{1,2}$/, "").replace(/\.\d{3}$/, "");
    const date = new Date(cleaned);
    return isNaN(date.getTime()) ? val : date.toISOString();
  }
  return val;
}, z.string().datetime());

const Eliassen_System_Linq_Search_FilterParameter = z
  .object({
    eq: z.unknown().nullable(),
    neq: z.unknown().nullable(),
    in: z.array(z.unknown()).nullable(),
    gt: z.unknown().nullable(),
    gte: z.unknown().nullable(),
    lt: z.unknown().nullable(),
    lte: z.unknown().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryAllergenModelFilter = z
  .object({
    allergenId: Eliassen_System_Linq_Search_FilterParameter,
    allergenName: Eliassen_System_Linq_Search_FilterParameter,
    allergenGroup: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const Eliassen_System_Linq_Search_OrderDirections = z.enum(["asc", "desc"]);
const GreenOnion_Common_Models_QueryAllergenModelOrderBy = z
  .object({
    allergenId: Eliassen_System_Linq_Search_OrderDirections,
    allergenName: Eliassen_System_Linq_Search_OrderDirections,
    allergenGroup: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryAllergenModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryAllergenModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryAllergenModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryAllergenModel = z
  .object({
    allergenId: z.number().int(),
    allergenName: z.string().nullable(),
    allergenGroup: z.string().nullable(),
  })
  .partial();
const Eliassen_System_ResponseModel_MessageLevels = z.enum([
  "trace",
  "debug",
  "info",
  "warning",
  "error",
  "fatal",
  "unknown",
]);
const Eliassen_System_ResponseModel_ResultMessage = z.object({
  level: Eliassen_System_ResponseModel_MessageLevels.optional(),
  message: z.string().nullable(),
  messageCode: z.string().nullish(),
  context: z.string().nullish(),
  metaData: z.unknown().nullish(),
});
const GreenOnion_Common_Models_QueryAllergenModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryAllergenModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveAllergenModel = z
  .object({
    allergenId: z.number().int().nullable(),
    allergenName: z.string().nullable(),
    allergenGroup: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryCategoryModelFilter = z
  .object({
    categoryId: Eliassen_System_Linq_Search_FilterParameter,
    categoryName: Eliassen_System_Linq_Search_FilterParameter,
    categoryCode: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryCategoryModelOrderBy = z
  .object({
    categoryId: Eliassen_System_Linq_Search_OrderDirections,
    categoryName: Eliassen_System_Linq_Search_OrderDirections,
    categoryCode: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryCategoryModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryCategoryModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryCategoryModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryCategoryModel = z
  .object({
    categoryId: z.number().int(),
    categoryName: z.string().nullable(),
    categoryCode: z.string().nullable(),
    isActive: z.boolean().nullable(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryCategoryModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryCategoryModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveCategoryModel = z
  .object({
    categoryId: z.number().int().nullable(),
    categoryName: z.string().nullable(),
    categoryCode: z.string().nullable(),
    isActive: z.boolean().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryDefinedFilterModelFilter = z
  .object({
    definedFilterId: Eliassen_System_Linq_Search_FilterParameter,
    createById: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
    createBy: Eliassen_System_Linq_Search_FilterParameter,
    path: Eliassen_System_Linq_Search_FilterParameter,
    name: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    state: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryDefinedFilterModelOrderBy = z
  .object({
    definedFilterId: Eliassen_System_Linq_Search_OrderDirections,
    createById: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
    createBy: Eliassen_System_Linq_Search_OrderDirections,
    path: Eliassen_System_Linq_Search_OrderDirections,
    name: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    state: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryDefinedFilterModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryDefinedFilterModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryDefinedFilterModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryDefinedFilterModel = z
  .object({
    definedFilterId: z.number().int(),
    createById: z.number().int().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
    createBy: z.string().nullable(),
    path: z.string().nullable(),
    name: z.string().nullable(),
    isActive: z.boolean(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    state: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryDefinedFilterModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryDefinedFilterModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveDefinedFilterModel = z
  .object({
    definedFilterId: z.number().int().nullable(),
    path: z.string().nullable(),
    name: z.string().nullable(),
    isActive: z.boolean(),
    state: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryDistributorModelFilter = z
  .object({
    distributorId: Eliassen_System_Linq_Search_FilterParameter,
    distributorName: Eliassen_System_Linq_Search_FilterParameter,
    distributorCode: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryDistributorModelOrderBy = z
  .object({
    distributorId: Eliassen_System_Linq_Search_OrderDirections,
    distributorName: Eliassen_System_Linq_Search_OrderDirections,
    distributorCode: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryDistributorModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryDistributorModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryDistributorModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryDistributorModel = z
  .object({
    distributorId: z.number().int(),
    distributorName: z.string().nullable(),
    distributorCode: z.string().nullable(),
    isActive: z.boolean().nullable(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryDistributorModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryDistributorModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveDistributorModel = z
  .object({
    distributorId: z.number().int().nullable(),
    distributorName: z.string().nullable(),
    distributorCode: z.string().nullable(),
    isActive: z.boolean().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryErrorLogModelFilter = z
  .object({
    errorLogId: Eliassen_System_Linq_Search_FilterParameter,
    errorMessage: Eliassen_System_Linq_Search_FilterParameter,
    errorPath: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryErrorLogModelOrderBy = z
  .object({
    errorLogId: Eliassen_System_Linq_Search_OrderDirections,
    errorMessage: Eliassen_System_Linq_Search_OrderDirections,
    errorPath: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryErrorLogModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryErrorLogModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryErrorLogModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryErrorLogModel = z
  .object({
    errorLogId: z.number().int(),
    errorMessage: z.string().nullable(),
    errorPath: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryErrorLogModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryErrorLogModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_QueryIocCategoryModelFilter = z
  .object({
    iocCategoryId: Eliassen_System_Linq_Search_FilterParameter,
    name: Eliassen_System_Linq_Search_FilterParameter,
    color: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryIocCategoryModelOrderBy = z
  .object({
    iocCategoryId: Eliassen_System_Linq_Search_OrderDirections,
    name: Eliassen_System_Linq_Search_OrderDirections,
    color: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryIocCategoryModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryIocCategoryModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryIocCategoryModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryIocCategoryModel = z
  .object({
    iocCategoryId: z.number().int(),
    name: z.string().nullable(),
    color: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryIocCategoryModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryIocCategoryModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_QueryIngredientModelFilter = z
  .object({
    ingredientId: Eliassen_System_Linq_Search_FilterParameter,
    ingredientName: Eliassen_System_Linq_Search_FilterParameter,
    group: Eliassen_System_Linq_Search_FilterParameter,
    iocGroup: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryIngredientModelOrderBy = z
  .object({
    ingredientId: Eliassen_System_Linq_Search_OrderDirections,
    ingredientName: Eliassen_System_Linq_Search_OrderDirections,
    group: Eliassen_System_Linq_Search_OrderDirections,
    iocGroup: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryIngredientModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryIngredientModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryIngredientModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryIngredientModel = z
  .object({
    ingredientId: z.number().int(),
    ingredientName: z.string().nullable(),
    group: z.string().nullable(),
    iocGroup: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryIngredientModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryIngredientModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveIngredientModel = z
  .object({
    ingredientId: z.number().int().nullable(),
    ingredientName: z.string().nullable(),
    group: z.string().nullable(),
    iocGroup: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryManufacturerModelFilter = z
  .object({
    manufacturerId: Eliassen_System_Linq_Search_FilterParameter,
    manufacturerName: Eliassen_System_Linq_Search_FilterParameter,
    glnNumber: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    hasUsers: Eliassen_System_Linq_Search_FilterParameter,
    userCount: Eliassen_System_Linq_Search_FilterParameter,
    hasActiveUsers: Eliassen_System_Linq_Search_FilterParameter,
    activeUserCount: Eliassen_System_Linq_Search_FilterParameter,
    productCount: Eliassen_System_Linq_Search_FilterParameter,
    hasOneWorldSync: Eliassen_System_Linq_Search_FilterParameter,
    oneWorldSyncCount: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryManufacturerModelOrderBy = z
  .object({
    manufacturerId: Eliassen_System_Linq_Search_OrderDirections,
    manufacturerName: Eliassen_System_Linq_Search_OrderDirections,
    glnNumber: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    hasUsers: Eliassen_System_Linq_Search_OrderDirections,
    userCount: Eliassen_System_Linq_Search_OrderDirections,
    hasActiveUsers: Eliassen_System_Linq_Search_OrderDirections,
    activeUserCount: Eliassen_System_Linq_Search_OrderDirections,
    productCount: Eliassen_System_Linq_Search_OrderDirections,
    hasOneWorldSync: Eliassen_System_Linq_Search_OrderDirections,
    oneWorldSyncCount: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryManufacturerModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryManufacturerModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryManufacturerModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryManufacturerModel = z
  .object({
    manufacturerId: z.number().int(),
    manufacturerName: z.string().nullable(),
    glnNumber: z.string().nullable(),
    isActive: z.boolean(),
    hasUsers: z.boolean(),
    userCount: z.number().int(),
    hasActiveUsers: z.boolean(),
    activeUserCount: z.number().int(),
    productCount: z.number().int(),
    hasOneWorldSync: z.boolean(),
    oneWorldSyncCount: z.number().int(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryManufacturerModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryManufacturerModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveManufacturerModel = z
  .object({
    manufacturerId: z.number().int().nullable(),
    manufacturerName: z.string().nullable(),
    glnNumber: z.string().nullable(),
    isActive: z.boolean(),
  })
  .partial();
const GreenOnion_Common_Models_QueryMonthlyNumberModelFilter = z
  .object({
    id: Eliassen_System_Linq_Search_FilterParameter,
    schoolDistrictId: Eliassen_System_Linq_Search_FilterParameter,
    monthId: Eliassen_System_Linq_Search_FilterParameter,
    actualMonthId: Eliassen_System_Linq_Search_FilterParameter,
    year: Eliassen_System_Linq_Search_FilterParameter,
    enrollment: Eliassen_System_Linq_Search_FilterParameter,
    numberOfSites: Eliassen_System_Linq_Search_FilterParameter,
    numberOfDistricts: Eliassen_System_Linq_Search_FilterParameter,
    mealsServed: Eliassen_System_Linq_Search_FilterParameter,
    freeAndReducedPercent: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    regDate: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryMonthlyNumberModelOrderBy = z
  .object({
    id: Eliassen_System_Linq_Search_OrderDirections,
    schoolDistrictId: Eliassen_System_Linq_Search_OrderDirections,
    monthId: Eliassen_System_Linq_Search_OrderDirections,
    actualMonthId: Eliassen_System_Linq_Search_OrderDirections,
    year: Eliassen_System_Linq_Search_OrderDirections,
    enrollment: Eliassen_System_Linq_Search_OrderDirections,
    numberOfSites: Eliassen_System_Linq_Search_OrderDirections,
    numberOfDistricts: Eliassen_System_Linq_Search_OrderDirections,
    mealsServed: Eliassen_System_Linq_Search_OrderDirections,
    freeAndReducedPercent: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    regDate: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryMonthlyNumberModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryMonthlyNumberModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryMonthlyNumberModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryMonthlyNumberModel = z
  .object({
    id: z.number().int().nullable(),
    schoolDistrictId: z.number().int().nullable(),
    monthId: z.number().int().nullable(),
    actualMonthId: z.number().int().nullable(),
    year: z.string().nullable(),
    enrollment: z.number().int().nullable(),
    numberOfSites: z.number().int().nullable(),
    numberOfDistricts: z.number().int().nullable(),
    mealsServed: z.number().int().nullable(),
    freeAndReducedPercent: z.number().int().nullable(),
    isActive: z.boolean().nullable(),
    regDate: z.string().datetime({ offset: true }).nullable(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryMonthlyNumberModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryMonthlyNumberModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveMonthlyNumberModel = z
  .object({
    id: z.number().int().nullable(),
    schoolDistrictId: z.number().int().nullable(),
    monthId: z.number().int().nullable(),
    actualMonthId: z.number().int().nullable(),
    year: z.string().nullable(),
    enrollment: z.number().int().nullable(),
    numberOfSites: z.number().int().nullable(),
    numberOfDistricts: z.number().int().nullable(),
    mealsServed: z.number().int().nullable(),
    freeAndReducedPercent: z.number().int().nullable(),
    isActive: z.boolean().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryOneWorldSyncProductModelFilter = z
  .object({
    productId: Eliassen_System_Linq_Search_FilterParameter,
    name: Eliassen_System_Linq_Search_FilterParameter,
    description: Eliassen_System_Linq_Search_FilterParameter,
    gtin: Eliassen_System_Linq_Search_FilterParameter,
    upc: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    manufacturerId: Eliassen_System_Linq_Search_FilterParameter,
    manufacturerName: Eliassen_System_Linq_Search_FilterParameter,
    iocCategoryId: Eliassen_System_Linq_Search_FilterParameter,
    iocCategory: Eliassen_System_Linq_Search_FilterParameter,
    categoryId: Eliassen_System_Linq_Search_FilterParameter,
    category: Eliassen_System_Linq_Search_FilterParameter,
    subCategoryId: Eliassen_System_Linq_Search_FilterParameter,
    subCategory: Eliassen_System_Linq_Search_FilterParameter,
    storageTypeId: Eliassen_System_Linq_Search_FilterParameter,
    storageTypeName: Eliassen_System_Linq_Search_FilterParameter,
    ingredients: Eliassen_System_Linq_Search_FilterParameter,
    isAllocated: Eliassen_System_Linq_Search_FilterParameter,
    hasAllergens: Eliassen_System_Linq_Search_FilterParameter,
    hasOneWorldSyncProduct: Eliassen_System_Linq_Search_FilterParameter,
    oneWorldSyncProductId: Eliassen_System_Linq_Search_FilterParameter,
    hasProduct: Eliassen_System_Linq_Search_FilterParameter,
    hasSuggestedProducts: Eliassen_System_Linq_Search_FilterParameter,
    hasApprovedSuggestedProducts: Eliassen_System_Linq_Search_FilterParameter,
    isSuggestedProduct: Eliassen_System_Linq_Search_FilterParameter,
    isApprovedSuggestedProduct: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryOneWorldSyncProductModelOrderBy = z
  .object({
    productId: Eliassen_System_Linq_Search_OrderDirections,
    name: Eliassen_System_Linq_Search_OrderDirections,
    description: Eliassen_System_Linq_Search_OrderDirections,
    gtin: Eliassen_System_Linq_Search_OrderDirections,
    upc: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    manufacturerId: Eliassen_System_Linq_Search_OrderDirections,
    manufacturerName: Eliassen_System_Linq_Search_OrderDirections,
    iocCategoryId: Eliassen_System_Linq_Search_OrderDirections,
    iocCategory: Eliassen_System_Linq_Search_OrderDirections,
    categoryId: Eliassen_System_Linq_Search_OrderDirections,
    category: Eliassen_System_Linq_Search_OrderDirections,
    subCategoryId: Eliassen_System_Linq_Search_OrderDirections,
    subCategory: Eliassen_System_Linq_Search_OrderDirections,
    storageTypeId: Eliassen_System_Linq_Search_OrderDirections,
    storageTypeName: Eliassen_System_Linq_Search_OrderDirections,
    ingredients: Eliassen_System_Linq_Search_OrderDirections,
    isAllocated: Eliassen_System_Linq_Search_OrderDirections,
    hasAllergens: Eliassen_System_Linq_Search_OrderDirections,
    hasOneWorldSyncProduct: Eliassen_System_Linq_Search_OrderDirections,
    oneWorldSyncProductId: Eliassen_System_Linq_Search_OrderDirections,
    hasProduct: Eliassen_System_Linq_Search_OrderDirections,
    hasSuggestedProducts: Eliassen_System_Linq_Search_OrderDirections,
    hasApprovedSuggestedProducts: Eliassen_System_Linq_Search_OrderDirections,
    isSuggestedProduct: Eliassen_System_Linq_Search_OrderDirections,
    isApprovedSuggestedProduct: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryOneWorldSyncProductModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter:
      GreenOnion_Common_Models_QueryOneWorldSyncProductModelFilter.nullable(),
    orderBy:
      GreenOnion_Common_Models_QueryOneWorldSyncProductModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_NutritionalInformationModel = z
  .object({
    serving: z.number().nullable(),
    servingUom: z.string().nullable(),
    calories: z.number().nullable(),
    caloriesUom: z.string().nullable(),
    carbohydrates: z.number().nullable(),
    carbohydratesUom: z.string().nullable(),
    protein: z.number().nullable(),
    proteinUom: z.string().nullable(),
    totalFat: z.number().nullable(),
    transFat: z.number().nullable(),
    saturatedFat: z.number().nullable(),
    dietaryFiber: z.number().nullable(),
    dietaryFiberUom: z.string().nullable(),
    sugar: z.number().nullable(),
    sugarUom: z.string().nullable(),
    addedSugar: z.number().nullable(),
    addedSugarUom: z.string().nullable(),
    sodium: z.number().nullable(),
    sodiumUom: z.string().nullable(),
    cholesterol: z.number().nullable(),
    cholesterolUom: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryOneWorldSyncProductModel = z
  .object({
    productId: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    gtin: z.string().nullable(),
    upc: z.string().nullable(),
    images: z.array(z.string()).nullable(),
    isActive: z.boolean(),
    manufacturerId: z.number().int().nullable(),
    manufacturerName: z.string().nullable(),
    iocCategoryId: z.number().int().nullable(),
    iocCategory: z.string().nullable(),
    categoryId: z.number().int().nullable(),
    category: z.string().nullable(),
    subCategoryId: z.number().int().nullable(),
    subCategory: z.string().nullable(),
    storageTypeId: z.number().int().nullable(),
    storageTypeName: z.string().nullable(),
    ingredients: z.string().nullable(),
    isAllocated: z.boolean(),
    hasAllergens: z.boolean(),
    hasOneWorldSyncProduct: z.boolean(),
    oneWorldSyncProductId: z.number().int().nullable(),
    hasProduct: z.boolean(),
    hasSuggestedProducts: z.boolean(),
    hasApprovedSuggestedProducts: z.boolean(),
    isSuggestedProduct: z.boolean(),
    isApprovedSuggestedProduct: z.boolean(),
    nutritionalInformation:
      GreenOnion_Common_Models_NutritionalInformationModel,
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryOneWorldSyncProductModelPagedQueryResult = z
  .object({
    rows: z
      .array(GreenOnion_Common_Models_QueryOneWorldSyncProductModel)
      .nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveOneWorldSyncProductModel = z
  .object({
    productId: z.number().int().nullable(),
    productName: z.string().nullable(),
    gtin: z.string().nullable(),
    upc: z.string().nullable(),
    brandName: z.string().nullable(),
    ingredients: z.string().nullable(),
    productDescription: z.string().nullable(),
    vendor: z.string().nullable(),
    manufacturerId: z.number().int().nullable(),
    storageTypeId: z.number().int().nullable(),
    categoryName: z.string().nullable(),
    subCategory1Name: z.string().nullable(),
    subCategory2Name: z.string().nullable(),
    allergenKeyword: z.string().nullable(),
    isActive: z.boolean().nullable(),
    dataForm: z.string().nullable(),
    nutritionalInformation:
      GreenOnion_Common_Models_NutritionalInformationModel,
  })
  .partial();
const GreenOnion_Common_Models_QueryProductModelFilter = z
  .object({
    productId: Eliassen_System_Linq_Search_FilterParameter,
    name: Eliassen_System_Linq_Search_FilterParameter,
    description: Eliassen_System_Linq_Search_FilterParameter,
    gtin: Eliassen_System_Linq_Search_FilterParameter,
    upc: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    manufacturerId: Eliassen_System_Linq_Search_FilterParameter,
    manufacturerName: Eliassen_System_Linq_Search_FilterParameter,
    iocCategoryId: Eliassen_System_Linq_Search_FilterParameter,
    iocCategory: Eliassen_System_Linq_Search_FilterParameter,
    categoryId: Eliassen_System_Linq_Search_FilterParameter,
    category: Eliassen_System_Linq_Search_FilterParameter,
    subCategoryId: Eliassen_System_Linq_Search_FilterParameter,
    subCategory: Eliassen_System_Linq_Search_FilterParameter,
    storageTypeId: Eliassen_System_Linq_Search_FilterParameter,
    storageTypeName: Eliassen_System_Linq_Search_FilterParameter,
    ingredients: Eliassen_System_Linq_Search_FilterParameter,
    isAllocated: Eliassen_System_Linq_Search_FilterParameter,
    hasAllergens: Eliassen_System_Linq_Search_FilterParameter,
    hasOneWorldSyncProduct: Eliassen_System_Linq_Search_FilterParameter,
    oneWorldSyncProductId: Eliassen_System_Linq_Search_FilterParameter,
    hasProduct: Eliassen_System_Linq_Search_FilterParameter,
    hasSuggestedProducts: Eliassen_System_Linq_Search_FilterParameter,
    hasApprovedSuggestedProducts: Eliassen_System_Linq_Search_FilterParameter,
    isSuggestedProduct: Eliassen_System_Linq_Search_FilterParameter,
    isApprovedSuggestedProduct: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryProductModelOrderBy = z
  .object({
    productId: Eliassen_System_Linq_Search_OrderDirections,
    name: Eliassen_System_Linq_Search_OrderDirections,
    description: Eliassen_System_Linq_Search_OrderDirections,
    gtin: Eliassen_System_Linq_Search_OrderDirections,
    upc: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    manufacturerId: Eliassen_System_Linq_Search_OrderDirections,
    manufacturerName: Eliassen_System_Linq_Search_OrderDirections,
    iocCategoryId: Eliassen_System_Linq_Search_OrderDirections,
    iocCategory: Eliassen_System_Linq_Search_OrderDirections,
    categoryId: Eliassen_System_Linq_Search_OrderDirections,
    category: Eliassen_System_Linq_Search_OrderDirections,
    subCategoryId: Eliassen_System_Linq_Search_OrderDirections,
    subCategory: Eliassen_System_Linq_Search_OrderDirections,
    storageTypeId: Eliassen_System_Linq_Search_OrderDirections,
    storageTypeName: Eliassen_System_Linq_Search_OrderDirections,
    ingredients: Eliassen_System_Linq_Search_OrderDirections,
    isAllocated: Eliassen_System_Linq_Search_OrderDirections,
    hasAllergens: Eliassen_System_Linq_Search_OrderDirections,
    hasOneWorldSyncProduct: Eliassen_System_Linq_Search_OrderDirections,
    oneWorldSyncProductId: Eliassen_System_Linq_Search_OrderDirections,
    hasProduct: Eliassen_System_Linq_Search_OrderDirections,
    hasSuggestedProducts: Eliassen_System_Linq_Search_OrderDirections,
    hasApprovedSuggestedProducts: Eliassen_System_Linq_Search_OrderDirections,
    isSuggestedProduct: Eliassen_System_Linq_Search_OrderDirections,
    isApprovedSuggestedProduct: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryProductModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryProductModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryProductModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryProductModel = z
  .object({
    productId: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    gtin: z.string().nullable(),
    upc: z.string().nullable(),
    images: z.array(z.string()).nullable(),
    isActive: z.boolean(),
    manufacturerId: z.number().int().nullable(),
    manufacturerName: z.string().nullable(),
    iocCategoryId: z.number().int().nullable(),
    iocCategory: z.string().nullable(),
    categoryId: z.number().int().nullable(),
    category: z.string().nullable(),
    subCategoryId: z.number().int().nullable(),
    subCategory: z.string().nullable(),
    storageTypeId: z.number().int().nullable(),
    storageTypeName: z.string().nullable(),
    ingredients: z.string().nullable(),
    isAllocated: z.boolean(),
    hasAllergens: z.boolean(),
    hasOneWorldSyncProduct: z.boolean(),
    oneWorldSyncProductId: z.number().int().nullable(),
    hasProduct: z.boolean(),
    hasSuggestedProducts: z.boolean(),
    hasApprovedSuggestedProducts: z.boolean(),
    isSuggestedProduct: z.boolean(),
    isApprovedSuggestedProduct: z.boolean(),
    nutritionalInformation:
      GreenOnion_Common_Models_NutritionalInformationModel,
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryProductModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryProductModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_QueryRoleModelFilter = z
  .object({
    roleId: Eliassen_System_Linq_Search_FilterParameter,
    roleName: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    userCount: Eliassen_System_Linq_Search_FilterParameter,
    activeUserCount: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryRoleModelOrderBy = z
  .object({
    roleId: Eliassen_System_Linq_Search_OrderDirections,
    roleName: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    userCount: Eliassen_System_Linq_Search_OrderDirections,
    activeUserCount: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryRoleModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryRoleModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryRoleModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryRoleModel = z
  .object({
    roleId: z.number().int(),
    roleName: z.string().nullable(),
    isActive: z.boolean(),
    userCount: z.number().int(),
    activeUserCount: z.number().int(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryRoleModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryRoleModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_QuerySchoolDistrictModelFilter = z
  .object({
    schoolDistrictId: Eliassen_System_Linq_Search_FilterParameter,
    siteCode: Eliassen_System_Linq_Search_FilterParameter,
    districtName: Eliassen_System_Linq_Search_FilterParameter,
    phoneNumber: Eliassen_System_Linq_Search_FilterParameter,
    email: Eliassen_System_Linq_Search_FilterParameter,
    country: Eliassen_System_Linq_Search_FilterParameter,
    stateId: Eliassen_System_Linq_Search_FilterParameter,
    state: Eliassen_System_Linq_Search_FilterParameter,
    city: Eliassen_System_Linq_Search_FilterParameter,
    districtLogo: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    foodServiceOptions: Eliassen_System_Linq_Search_FilterParameter,
    contractCompany: Eliassen_System_Linq_Search_FilterParameter,
    isSchoolCoopMember: Eliassen_System_Linq_Search_FilterParameter,
    isSchoolCoop: Eliassen_System_Linq_Search_FilterParameter,
    schoolCoopId: Eliassen_System_Linq_Search_FilterParameter,
    schoolCoopName: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QuerySchoolDistrictModelOrderBy = z
  .object({
    schoolDistrictId: Eliassen_System_Linq_Search_OrderDirections,
    siteCode: Eliassen_System_Linq_Search_OrderDirections,
    districtName: Eliassen_System_Linq_Search_OrderDirections,
    phoneNumber: Eliassen_System_Linq_Search_OrderDirections,
    email: Eliassen_System_Linq_Search_OrderDirections,
    country: Eliassen_System_Linq_Search_OrderDirections,
    stateId: Eliassen_System_Linq_Search_OrderDirections,
    state: Eliassen_System_Linq_Search_OrderDirections,
    city: Eliassen_System_Linq_Search_OrderDirections,
    districtLogo: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    foodServiceOptions: Eliassen_System_Linq_Search_OrderDirections,
    contractCompany: Eliassen_System_Linq_Search_OrderDirections,
    isSchoolCoopMember: Eliassen_System_Linq_Search_OrderDirections,
    isSchoolCoop: Eliassen_System_Linq_Search_OrderDirections,
    schoolCoopId: Eliassen_System_Linq_Search_OrderDirections,
    schoolCoopName: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QuerySchoolDistrictModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QuerySchoolDistrictModelFilter.nullable(),
    orderBy:
      GreenOnion_Common_Models_QuerySchoolDistrictModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QuerySchoolDistrictModel = z
  .object({
    schoolDistrictId: z.number().int(),
    siteCode: z.string().nullable(),
    districtName: z.string().nullable(),
    phoneNumber: z.string().nullable(),
    email: z.string().nullable(),
    country: z.string().nullable(),
    stateId: z.number().int().nullable(),
    state: z.string().nullable(),
    city: z.string().nullable(),
    districtLogo: z.string().nullable(),
    isActive: z.boolean().nullable(),
    foodServiceOptions: z.string().nullable(),
    contractCompany: z.string().nullable(),
    isSchoolCoopMember: z.boolean(),
    isSchoolCoop: z.boolean(),
    schoolCoopId: z.number().int().nullable(),
    schoolCoopName: z.string().nullable(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QuerySchoolDistrictModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QuerySchoolDistrictModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const Microsoft_AspNetCore_Mvc_ProblemDetails = z
  .object({
    type: z.string().nullable(),
    title: z.string().nullable(),
    status: z.number().int().nullable(),
    detail: z.string().nullable(),
    instance: z.string().nullable(),
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_SaveSchoolDistrictModel = z
  .object({
    schoolDistrictId: z.number().int().nullable(),
    siteCode: z.string().nullable(),
    districtName: z.string().nullable(),
    phoneNumber: z.string().nullable(),
    email: z.string().nullable(),
    country: z.string().nullable(),
    state: z.number().int().nullable(),
    city: z.string().nullable(),
    districtLogo: z.string().nullable(),
    isActive: z.boolean().nullable(),
    foodServiceOptions: z.string().nullable(),
    contractCompany: z.string().nullable(),
    isSchoolCoop: z.boolean().nullable(),
    schoolCoopId: z.number().int().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryStateModelFilter = z
  .object({
    stateId: Eliassen_System_Linq_Search_FilterParameter,
    stateName: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryStateModelOrderBy = z
  .object({
    stateId: Eliassen_System_Linq_Search_OrderDirections,
    stateName: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryStateModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryStateModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryStateModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryStateModel = z
  .object({ stateId: z.number().int(), stateName: z.string().nullable() })
  .partial();
const GreenOnion_Common_Models_QueryStateModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryStateModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_QueryStorageTypeModelFilter = z
  .object({
    storageTypeId: Eliassen_System_Linq_Search_FilterParameter,
    storageTypeName: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryStorageTypeModelOrderBy = z
  .object({
    storageTypeId: Eliassen_System_Linq_Search_OrderDirections,
    storageTypeName: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryStorageTypeModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryStorageTypeModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryStorageTypeModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryStorageTypeModel = z
  .object({
    storageTypeId: z.number().int(),
    storageTypeName: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryStorageTypeModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryStorageTypeModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveStorageTypeModel = z
  .object({
    storageTypeId: z.number().int().nullable(),
    storageTypeName: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QuerySubCategoryModelFilter = z
  .object({
    subCategoryId: Eliassen_System_Linq_Search_FilterParameter,
    categoryId: Eliassen_System_Linq_Search_FilterParameter,
    subCategoryName: Eliassen_System_Linq_Search_FilterParameter,
    subCategoryCode: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QuerySubCategoryModelOrderBy = z
  .object({
    subCategoryId: Eliassen_System_Linq_Search_OrderDirections,
    categoryId: Eliassen_System_Linq_Search_OrderDirections,
    subCategoryName: Eliassen_System_Linq_Search_OrderDirections,
    subCategoryCode: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QuerySubCategoryModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QuerySubCategoryModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QuerySubCategoryModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QuerySubCategoryModel = z
  .object({
    subCategoryId: z.number().int(),
    categoryId: z.number().int().nullable(),
    subCategoryName: z.string().nullable(),
    subCategoryCode: z.string().nullable(),
    isActive: z.boolean().nullable(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QuerySubCategoryModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QuerySubCategoryModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveSubCategoryModel = z
  .object({
    subCategoryId: z.number().int().nullable(),
    categoryId: z.number().int().nullable(),
    subCategoryName: z.string().nullable(),
    subCategoryCode: z.string().nullable(),
    isActive: z.boolean().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryUserModelFilter = z
  .object({
    userId: Eliassen_System_Linq_Search_FilterParameter,
    isActive: Eliassen_System_Linq_Search_FilterParameter,
    firstName: Eliassen_System_Linq_Search_FilterParameter,
    lastName: Eliassen_System_Linq_Search_FilterParameter,
    objectId: Eliassen_System_Linq_Search_FilterParameter,
    email: Eliassen_System_Linq_Search_FilterParameter,
    mobile: Eliassen_System_Linq_Search_FilterParameter,
    profileImage: Eliassen_System_Linq_Search_FilterParameter,
    coverImage: Eliassen_System_Linq_Search_FilterParameter,
    addressLine1: Eliassen_System_Linq_Search_FilterParameter,
    addressLine2: Eliassen_System_Linq_Search_FilterParameter,
    city: Eliassen_System_Linq_Search_FilterParameter,
    country: Eliassen_System_Linq_Search_FilterParameter,
    zipCode: Eliassen_System_Linq_Search_FilterParameter,
    stateId: Eliassen_System_Linq_Search_FilterParameter,
    state: Eliassen_System_Linq_Search_FilterParameter,
    roleId: Eliassen_System_Linq_Search_FilterParameter,
    roleName: Eliassen_System_Linq_Search_FilterParameter,
    schoolDistrictId: Eliassen_System_Linq_Search_FilterParameter,
    schoolDistrictName: Eliassen_System_Linq_Search_FilterParameter,
    manufacturerId: Eliassen_System_Linq_Search_FilterParameter,
    manufacturerName: Eliassen_System_Linq_Search_FilterParameter,
    createdOn: Eliassen_System_Linq_Search_FilterParameter,
    createdById: Eliassen_System_Linq_Search_FilterParameter,
    createdBy: Eliassen_System_Linq_Search_FilterParameter,
    updatedOn: Eliassen_System_Linq_Search_FilterParameter,
    updatedById: Eliassen_System_Linq_Search_FilterParameter,
    updatedBy: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryUserModelOrderBy = z
  .object({
    userId: Eliassen_System_Linq_Search_OrderDirections,
    isActive: Eliassen_System_Linq_Search_OrderDirections,
    firstName: Eliassen_System_Linq_Search_OrderDirections,
    lastName: Eliassen_System_Linq_Search_OrderDirections,
    objectId: Eliassen_System_Linq_Search_OrderDirections,
    email: Eliassen_System_Linq_Search_OrderDirections,
    mobile: Eliassen_System_Linq_Search_OrderDirections,
    profileImage: Eliassen_System_Linq_Search_OrderDirections,
    coverImage: Eliassen_System_Linq_Search_OrderDirections,
    addressLine1: Eliassen_System_Linq_Search_OrderDirections,
    addressLine2: Eliassen_System_Linq_Search_OrderDirections,
    city: Eliassen_System_Linq_Search_OrderDirections,
    country: Eliassen_System_Linq_Search_OrderDirections,
    zipCode: Eliassen_System_Linq_Search_OrderDirections,
    stateId: Eliassen_System_Linq_Search_OrderDirections,
    state: Eliassen_System_Linq_Search_OrderDirections,
    roleId: Eliassen_System_Linq_Search_OrderDirections,
    roleName: Eliassen_System_Linq_Search_OrderDirections,
    schoolDistrictId: Eliassen_System_Linq_Search_OrderDirections,
    schoolDistrictName: Eliassen_System_Linq_Search_OrderDirections,
    manufacturerId: Eliassen_System_Linq_Search_OrderDirections,
    manufacturerName: Eliassen_System_Linq_Search_OrderDirections,
    createdOn: Eliassen_System_Linq_Search_OrderDirections,
    createdById: Eliassen_System_Linq_Search_OrderDirections,
    createdBy: Eliassen_System_Linq_Search_OrderDirections,
    updatedOn: Eliassen_System_Linq_Search_OrderDirections,
    updatedById: Eliassen_System_Linq_Search_OrderDirections,
    updatedBy: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryUserModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryUserModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryUserModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryUserModel = z
  .object({
    userId: z.number().int(),
    isActive: z.boolean(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    objectId: z.string().nullable(),
    email: z.string().nullable(),
    mobile: z.string().nullable(),
    profileImage: z.string().nullable(),
    coverImage: z.string().nullable(),
    addressLine1: z.string().nullable(),
    addressLine2: z.string().nullable(),
    city: z.string().nullable(),
    country: z.string().nullable(),
    zipCode: z.string().nullable(),
    stateId: z.number().int().nullable(),
    state: z.string().nullable(),
    roleId: z.number().int().nullable(),
    roleName: z.string().nullable(),
    schoolDistrictId: z.number().int().nullable(),
    schoolDistrictName: z.string().nullable(),
    manufacturerId: z.number().int().nullable(),
    manufacturerName: z.string().nullable(),
    createdOn: z.string().datetime({ offset: true }).nullable(),
    createdById: z.number().int().nullable(),
    createdBy: z.string().nullable(),
    updatedOn: z.string().datetime({ offset: true }).nullable(),
    updatedById: z.number().int().nullable(),
    updatedBy: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryUserModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryUserModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();
const GreenOnion_Common_Models_SaveUserModel = z
  .object({
    userId: z.number().int().nullable(),
    isActive: z.boolean().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    mobile: z.string().nullable(),
    profileImage: z.string().nullable(),
    coverImage: z.string().nullable(),
    addressLine1: z.string().nullable(),
    addressLine2: z.string().nullable(),
    city: z.string().nullable(),
    country: z.string().nullable(),
    zipCode: z.string().nullable(),
    stateId: z.number().int().nullable(),
    roleId: z.number().int().nullable(),
    schoolDistrictId: z.number().int().nullable(),
    manufacturerId: z.number().int().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryUserActionLogModelFilter = z
  .object({
    userActionLogId: Eliassen_System_Linq_Search_FilterParameter,
    eventType: Eliassen_System_Linq_Search_FilterParameter,
    httpMethod: Eliassen_System_Linq_Search_FilterParameter,
    eventDate: Eliassen_System_Linq_Search_FilterParameter,
    sessionId: Eliassen_System_Linq_Search_FilterParameter,
    requestId: Eliassen_System_Linq_Search_FilterParameter,
    correlationId: Eliassen_System_Linq_Search_FilterParameter,
    requestPath: Eliassen_System_Linq_Search_FilterParameter,
    userId: Eliassen_System_Linq_Search_FilterParameter,
    user: Eliassen_System_Linq_Search_FilterParameter,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryUserActionLogModelOrderBy = z
  .object({
    userActionLogId: Eliassen_System_Linq_Search_OrderDirections,
    eventType: Eliassen_System_Linq_Search_OrderDirections,
    httpMethod: Eliassen_System_Linq_Search_OrderDirections,
    eventDate: Eliassen_System_Linq_Search_OrderDirections,
    sessionId: Eliassen_System_Linq_Search_OrderDirections,
    requestId: Eliassen_System_Linq_Search_OrderDirections,
    correlationId: Eliassen_System_Linq_Search_OrderDirections,
    requestPath: Eliassen_System_Linq_Search_OrderDirections,
    userId: Eliassen_System_Linq_Search_OrderDirections,
    user: Eliassen_System_Linq_Search_OrderDirections,
  })
  .partial()
  .passthrough();
const GreenOnion_Common_Models_QueryUserActionLogModelSearchQuery = z
  .object({
    currentPage: z.number().int(),
    pageSize: z.number().int(),
    excludePageCount: z.boolean(),
    searchTerm: z.string().nullable(),
    filter: GreenOnion_Common_Models_QueryUserActionLogModelFilter.nullable(),
    orderBy: GreenOnion_Common_Models_QueryUserActionLogModelOrderBy.nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryUserActionLogModel = z
  .object({
    userActionLogId: z.number().int(),
    eventType: z.string().nullable(),
    httpMethod: z.string().nullable(),
    eventDate: z.string().datetime({ offset: true }),
    sessionId: z.string().nullable(),
    requestId: z.string().nullable(),
    correlationId: z.string().nullable(),
    requestPath: z.string().nullable(),
    userId: z.number().int(),
    user: z.string().nullable(),
  })
  .partial();
const GreenOnion_Common_Models_QueryUserActionLogModelPagedQueryResult = z
  .object({
    rows: z.array(GreenOnion_Common_Models_QueryUserActionLogModel).nullable(),
    messages: z.array(Eliassen_System_ResponseModel_ResultMessage).nullable(),
    currentPage: z.number().int(),
    totalPageCount: z.number().int(),
    totalRowCount: z.number().int(),
  })
  .partial();

export const schemas = {
  Eliassen_System_Linq_Search_FilterParameter,
  GreenOnion_Common_Models_QueryAllergenModelFilter,
  Eliassen_System_Linq_Search_OrderDirections,
  GreenOnion_Common_Models_QueryAllergenModelOrderBy,
  GreenOnion_Common_Models_QueryAllergenModelSearchQuery,
  GreenOnion_Common_Models_QueryAllergenModel,
  Eliassen_System_ResponseModel_MessageLevels,
  Eliassen_System_ResponseModel_ResultMessage,
  GreenOnion_Common_Models_QueryAllergenModelPagedQueryResult,
  GreenOnion_Common_Models_SaveAllergenModel,
  GreenOnion_Common_Models_QueryCategoryModelFilter,
  GreenOnion_Common_Models_QueryCategoryModelOrderBy,
  GreenOnion_Common_Models_QueryCategoryModelSearchQuery,
  GreenOnion_Common_Models_QueryCategoryModel,
  GreenOnion_Common_Models_QueryCategoryModelPagedQueryResult,
  GreenOnion_Common_Models_SaveCategoryModel,
  GreenOnion_Common_Models_QueryDefinedFilterModelFilter,
  GreenOnion_Common_Models_QueryDefinedFilterModelOrderBy,
  GreenOnion_Common_Models_QueryDefinedFilterModelSearchQuery,
  GreenOnion_Common_Models_QueryDefinedFilterModel,
  GreenOnion_Common_Models_QueryDefinedFilterModelPagedQueryResult,
  GreenOnion_Common_Models_SaveDefinedFilterModel,
  GreenOnion_Common_Models_QueryDistributorModelFilter,
  GreenOnion_Common_Models_QueryDistributorModelOrderBy,
  GreenOnion_Common_Models_QueryDistributorModelSearchQuery,
  GreenOnion_Common_Models_QueryDistributorModel,
  GreenOnion_Common_Models_QueryDistributorModelPagedQueryResult,
  GreenOnion_Common_Models_SaveDistributorModel,
  GreenOnion_Common_Models_QueryErrorLogModelFilter,
  GreenOnion_Common_Models_QueryErrorLogModelOrderBy,
  GreenOnion_Common_Models_QueryErrorLogModelSearchQuery,
  GreenOnion_Common_Models_QueryErrorLogModel,
  GreenOnion_Common_Models_QueryErrorLogModelPagedQueryResult,
  GreenOnion_Common_Models_QueryIocCategoryModelFilter,
  GreenOnion_Common_Models_QueryIocCategoryModelOrderBy,
  GreenOnion_Common_Models_QueryIocCategoryModelSearchQuery,
  GreenOnion_Common_Models_QueryIocCategoryModel,
  GreenOnion_Common_Models_QueryIocCategoryModelPagedQueryResult,
  GreenOnion_Common_Models_QueryIngredientModelFilter,
  GreenOnion_Common_Models_QueryIngredientModelOrderBy,
  GreenOnion_Common_Models_QueryIngredientModelSearchQuery,
  GreenOnion_Common_Models_QueryIngredientModel,
  GreenOnion_Common_Models_QueryIngredientModelPagedQueryResult,
  GreenOnion_Common_Models_SaveIngredientModel,
  GreenOnion_Common_Models_QueryManufacturerModelFilter,
  GreenOnion_Common_Models_QueryManufacturerModelOrderBy,
  GreenOnion_Common_Models_QueryManufacturerModelSearchQuery,
  GreenOnion_Common_Models_QueryManufacturerModel,
  GreenOnion_Common_Models_QueryManufacturerModelPagedQueryResult,
  GreenOnion_Common_Models_SaveManufacturerModel,
  GreenOnion_Common_Models_QueryMonthlyNumberModelFilter,
  GreenOnion_Common_Models_QueryMonthlyNumberModelOrderBy,
  GreenOnion_Common_Models_QueryMonthlyNumberModelSearchQuery,
  GreenOnion_Common_Models_QueryMonthlyNumberModel,
  GreenOnion_Common_Models_QueryMonthlyNumberModelPagedQueryResult,
  GreenOnion_Common_Models_SaveMonthlyNumberModel,
  GreenOnion_Common_Models_QueryOneWorldSyncProductModelFilter,
  GreenOnion_Common_Models_QueryOneWorldSyncProductModelOrderBy,
  GreenOnion_Common_Models_QueryOneWorldSyncProductModelSearchQuery,
  GreenOnion_Common_Models_NutritionalInformationModel,
  GreenOnion_Common_Models_QueryOneWorldSyncProductModel,
  GreenOnion_Common_Models_QueryOneWorldSyncProductModelPagedQueryResult,
  GreenOnion_Common_Models_SaveOneWorldSyncProductModel,
  GreenOnion_Common_Models_QueryProductModelFilter,
  GreenOnion_Common_Models_QueryProductModelOrderBy,
  GreenOnion_Common_Models_QueryProductModelSearchQuery,
  GreenOnion_Common_Models_QueryProductModel,
  GreenOnion_Common_Models_QueryProductModelPagedQueryResult,
  GreenOnion_Common_Models_QueryRoleModelFilter,
  GreenOnion_Common_Models_QueryRoleModelOrderBy,
  GreenOnion_Common_Models_QueryRoleModelSearchQuery,
  GreenOnion_Common_Models_QueryRoleModel,
  GreenOnion_Common_Models_QueryRoleModelPagedQueryResult,
  GreenOnion_Common_Models_QuerySchoolDistrictModelFilter,
  GreenOnion_Common_Models_QuerySchoolDistrictModelOrderBy,
  GreenOnion_Common_Models_QuerySchoolDistrictModelSearchQuery,
  GreenOnion_Common_Models_QuerySchoolDistrictModel,
  GreenOnion_Common_Models_QuerySchoolDistrictModelPagedQueryResult,
  Microsoft_AspNetCore_Mvc_ProblemDetails,
  GreenOnion_Common_Models_SaveSchoolDistrictModel,
  GreenOnion_Common_Models_QueryStateModelFilter,
  GreenOnion_Common_Models_QueryStateModelOrderBy,
  GreenOnion_Common_Models_QueryStateModelSearchQuery,
  GreenOnion_Common_Models_QueryStateModel,
  GreenOnion_Common_Models_QueryStateModelPagedQueryResult,
  GreenOnion_Common_Models_QueryStorageTypeModelFilter,
  GreenOnion_Common_Models_QueryStorageTypeModelOrderBy,
  GreenOnion_Common_Models_QueryStorageTypeModelSearchQuery,
  GreenOnion_Common_Models_QueryStorageTypeModel,
  GreenOnion_Common_Models_QueryStorageTypeModelPagedQueryResult,
  GreenOnion_Common_Models_SaveStorageTypeModel,
  GreenOnion_Common_Models_QuerySubCategoryModelFilter,
  GreenOnion_Common_Models_QuerySubCategoryModelOrderBy,
  GreenOnion_Common_Models_QuerySubCategoryModelSearchQuery,
  GreenOnion_Common_Models_QuerySubCategoryModel,
  GreenOnion_Common_Models_QuerySubCategoryModelPagedQueryResult,
  GreenOnion_Common_Models_SaveSubCategoryModel,
  GreenOnion_Common_Models_QueryUserModelFilter,
  GreenOnion_Common_Models_QueryUserModelOrderBy,
  GreenOnion_Common_Models_QueryUserModelSearchQuery,
  GreenOnion_Common_Models_QueryUserModel,
  GreenOnion_Common_Models_QueryUserModelPagedQueryResult,
  GreenOnion_Common_Models_SaveUserModel,
  GreenOnion_Common_Models_QueryUserActionLogModelFilter,
  GreenOnion_Common_Models_QueryUserActionLogModelOrderBy,
  GreenOnion_Common_Models_QueryUserActionLogModelSearchQuery,
  GreenOnion_Common_Models_QueryUserActionLogModel,
  GreenOnion_Common_Models_QueryUserActionLogModelPagedQueryResult,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/Allergen/Get",
    alias: "Allergen_Get",
    description: `Get **QueryAllergenModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryAllergenModel,
  },
  {
    method: "post",
    path: "/api/Allergen/Query",
    alias: "Allergen_Query",
    description: `Query **QueryAllergenModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryAllergenModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryAllergenModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/Allergen/Save",
    alias: "Allergen_Save",
    description: `Save **QueryAllergenModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveAllergenModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryAllergenModel,
  },
  {
    method: "get",
    path: "/api/Category/Get",
    alias: "Category_Get",
    description: `Get **QueryCategoryModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryCategoryModel,
  },
  {
    method: "post",
    path: "/api/Category/Query",
    alias: "Category_Query",
    description: `Query **QueryCategoryModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryCategoryModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryCategoryModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/Category/Save",
    alias: "Category_Save",
    description: `Save **QueryCategoryModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveCategoryModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryCategoryModel,
  },
  {
    method: "get",
    path: "/api/DefinedFilter/Get",
    alias: "DefinedFilter_Get",
    description: `Get **QueryDefinedFilterModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "path",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryDefinedFilterModel,
  },
  {
    method: "post",
    path: "/api/DefinedFilter/Query",
    alias: "DefinedFilter_Query",
    description: `Query **QueryDefinedFilterModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryDefinedFilterModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryDefinedFilterModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/DefinedFilter/Save",
    alias: "DefinedFilter_Save",
    description: `Save **QueryDefinedFilterModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveDefinedFilterModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryDefinedFilterModel,
  },
  {
    method: "get",
    path: "/api/Distributor/Get",
    alias: "Distributor_Get",
    description: `Get **QueryDistributorModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryDistributorModel,
  },
  {
    method: "post",
    path: "/api/Distributor/Query",
    alias: "Distributor_Query",
    description: `Query **QueryDistributorModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryDistributorModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryDistributorModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/Distributor/Save",
    alias: "Distributor_Save",
    description: `Save **QueryDistributorModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveDistributorModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryDistributorModel,
  },
  {
    method: "post",
    path: "/api/ErrorLog/Query",
    alias: "ErrorLog_Query",
    description: `Query **QueryErrorLogModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryErrorLogModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryErrorLogModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/IIocCategory/Query",
    alias: "IIocCategory_Query",
    description: `Query **QueryIocCategoryModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryIocCategoryModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryIocCategoryModelPagedQueryResult,
  },
  {
    method: "get",
    path: "/api/Ingredient/Get",
    alias: "Ingredient_Get",
    description: `Get **QueryIngredientModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "keyword",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryIngredientModel,
  },
  {
    method: "post",
    path: "/api/Ingredient/Query",
    alias: "Ingredient_Query",
    description: `Query **QueryIngredientModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryIngredientModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryIngredientModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/Ingredient/Save",
    alias: "Ingredient_Save",
    description: `Save **QueryIngredientModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveIngredientModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryIngredientModel,
  },
  {
    method: "get",
    path: "/api/Manufacturer/Get",
    alias: "Manufacturer_Get",
    description: `Get **QueryManufacturerModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "gln",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryManufacturerModel,
  },
  {
    method: "post",
    path: "/api/Manufacturer/Query",
    alias: "Manufacturer_Query",
    description: `Query **QueryManufacturerModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryManufacturerModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryManufacturerModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/Manufacturer/Save",
    alias: "Manufacturer_Save",
    description: `Save **QueryManufacturerModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveManufacturerModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryManufacturerModel,
  },
  {
    method: "get",
    path: "/api/MonthlyNumber/Get",
    alias: "MonthlyNumber_Get",
    description: `Get **QueryMonthlyNumberModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "schoolDistrictId",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "year",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryMonthlyNumberModel,
  },
  {
    method: "post",
    path: "/api/MonthlyNumber/Query",
    alias: "MonthlyNumber_Query",
    description: `Query **QueryMonthlyNumberModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryMonthlyNumberModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryMonthlyNumberModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/MonthlyNumber/Save",
    alias: "MonthlyNumber_Save",
    description: `Save **QueryMonthlyNumberModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveMonthlyNumberModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryMonthlyNumberModel,
  },
  {
    method: "get",
    path: "/api/OneWorldSyncProduct/Get",
    alias: "OneWorldSyncProduct_Get",
    description: `Get **QueryOneWorldSyncProductModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "gtin",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "upc",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryOneWorldSyncProductModel,
  },
  {
    method: "post",
    path: "/api/OneWorldSyncProduct/Query",
    alias: "OneWorldSyncProduct_Query",
    description: `Query **QueryOneWorldSyncProductModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema:
          GreenOnion_Common_Models_QueryOneWorldSyncProductModelSearchQuery,
      },
    ],
    response:
      GreenOnion_Common_Models_QueryOneWorldSyncProductModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/OneWorldSyncProduct/Save",
    alias: "OneWorldSyncProduct_Save",
    description: `Save **QueryOneWorldSyncProductModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveOneWorldSyncProductModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryOneWorldSyncProductModel,
  },
  {
    method: "get",
    path: "/api/Product/Get",
    alias: "Product_Get",
    description: `Get **QueryProductModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "gtin",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "upc",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryProductModel,
  },
  {
    method: "post",
    path: "/api/Product/Query",
    alias: "Product_Query",
    description: `Query **QueryProductModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryProductModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryProductModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/Product/Save",
    alias: "Product_Save",
    description: `Save **QueryProductModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "ProductId",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "ProductName",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "Gtin",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "Upc",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "CategoryId",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "SubCategoryId",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "IocCategoryId",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "Ingredients",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "BrandName",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "Description",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "AllergenKeywords",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "Vendor",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "ManufacturerId",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "StorageTypeId",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "ProductLabelPdfUrl",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "ManufacturerProductCode",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "IsActive",
        type: "Query",
        schema: z.boolean().optional(),
      },
      {
        name: "NutritionalInformation.Serving",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.ServingUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.Calories",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.CaloriesUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.Carbohydrates",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.CarbohydratesUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.Protein",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.ProteinUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.TotalFat",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.TransFat",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.SaturatedFat",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.DietaryFiber",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.DietaryFiberUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.Sugar",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.SugarUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.AddedSugar",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.AddedSugarUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.Sodium",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.SodiumUom",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "NutritionalInformation.Cholesterol",
        type: "Query",
        schema: z.number().optional(),
      },
      {
        name: "NutritionalInformation.CholesterolUom",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryProductModel,
  },
  {
    method: "post",
    path: "/api/Role/Query",
    alias: "Role_Query",
    description: `Query **QueryRoleModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryRoleModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryRoleModelPagedQueryResult,
  },
  {
    method: "get",
    path: "/api/SchoolDistrict/Get",
    alias: "SchoolDistrict_Get",
    description: `Get **QuerySchoolDistrictModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QuerySchoolDistrictModel,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/SchoolDistrict/Query",
    alias: "SchoolDistrict_Query",
    description: `Query **QuerySchoolDistrictModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QuerySchoolDistrictModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QuerySchoolDistrictModelPagedQueryResult,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/SchoolDistrict/Save",
    alias: "SchoolDistrict_Save",
    description: `Save **QuerySchoolDistrictModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveSchoolDistrictModel,
      },
    ],
    response: GreenOnion_Common_Models_QuerySchoolDistrictModel,
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/State/Query",
    alias: "State_Query",
    description: `Query **QueryStateModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryStateModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryStateModelPagedQueryResult,
  },
  {
    method: "get",
    path: "/api/StorageType/Get",
    alias: "StorageType_Get",
    description: `Get **QueryStorageTypeModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryStorageTypeModel,
  },
  {
    method: "post",
    path: "/api/StorageType/Query",
    alias: "StorageType_Query",
    description: `Query **QueryStorageTypeModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryStorageTypeModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryStorageTypeModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/StorageType/Save",
    alias: "StorageType_Save",
    description: `Save **QueryStorageTypeModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveStorageTypeModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryStorageTypeModel,
  },
  {
    method: "get",
    path: "/api/SubCategory/Get",
    alias: "SubCategory_Get",
    description: `Get **QuerySubCategoryModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QuerySubCategoryModel,
  },
  {
    method: "post",
    path: "/api/SubCategory/Query",
    alias: "SubCategory_Query",
    description: `Query **QuerySubCategoryModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QuerySubCategoryModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QuerySubCategoryModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/SubCategory/Save",
    alias: "SubCategory_Save",
    description: `Save **QuerySubCategoryModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveSubCategoryModel,
      },
    ],
    response: GreenOnion_Common_Models_QuerySubCategoryModel,
  },
  {
    method: "get",
    path: "/api/User/Get",
    alias: "User_Get",
    description: `Get **QueryUserModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "email",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "objectid",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: GreenOnion_Common_Models_QueryUserModel,
  },
  {
    method: "post",
    path: "/api/User/Query",
    alias: "User_Query",
    description: `Query **QueryUserModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryUserModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryUserModelPagedQueryResult,
  },
  {
    method: "post",
    path: "/api/User/Save",
    alias: "User_Save",
    description: `Save **QueryUserModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_SaveUserModel,
      },
    ],
    response: GreenOnion_Common_Models_QueryUserModel,
  },
  {
    method: "post",
    path: "/api/UserActionLog/Query",
    alias: "UserActionLog_Query",
    description: `Query **QueryUserActionLogModel**`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GreenOnion_Common_Models_QueryUserActionLogModelSearchQuery,
      },
    ],
    response: GreenOnion_Common_Models_QueryUserActionLogModelPagedQueryResult,
  },
  {
    method: "get",
    path: "/health",
    alias: "getHealth",
    requestFormat: "json",
    response: z
      .object({ status: z.string(), errors: z.array(z.any()) })
      .partial()
      .passthrough(),
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}

// Custom client factory with datetime preprocessing
export function createCustomApiClient(
  baseUrl: string,
  options?: ZodiosOptions
) {
  // Transform schemas to use custom datetime handling
  const transformedEndpoints = endpoints.map((endpoint) => {
    const transformSchema = (schema: any): any => {
      if (typeof schema === "object" && schema !== null) {
        if (
          schema._def?.typeName === "ZodString" &&
          schema._def?.checks?.some((check: any) => check.kind === "datetime")
        ) {
          return customDatetimeSchema;
        }
        if (schema._def?.typeName === "ZodObject") {
          const transformedShape = {};
          for (const [key, value] of Object.entries(schema.shape || {})) {
            transformedShape[key] = transformSchema(value);
          }
          return z.object(transformedShape);
        }
        if (schema._def?.typeName === "ZodArray") {
          return z.array(transformSchema(schema.element));
        }
        if (schema._def?.typeName === "ZodOptional") {
          return z.optional(transformSchema(schema.unwrap()));
        }
        if (schema._def?.typeName === "ZodNullable") {
          return z.nullable(transformSchema(schema.unwrap()));
        }
      }
      return schema;
    };

    return {
      ...endpoint,
      response: transformSchema(endpoint.response),
      parameters: endpoint.parameters?.map((param) => ({
        ...param,
        schema: transformSchema(param.schema),
      })),
    };
  });

  return new Zodios(baseUrl, transformedEndpoints, options);
}

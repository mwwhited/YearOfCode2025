// import {
//     AllergenClient,
//     CategoryClient,
//     DashBoardClient,
//     DataMigrationThroughApiClient,
//     DefinedFilterClient,
//     DistributorClient,
//     ErrorLogClient,
//     IIocCategoryClient,
//     IngredientClient,
//     ManufacturerClient,
//     MonthlyNumberClient,
//     OneWorldSyncProductClient,
//     ProductClient,
//     ReportClient,
//     RoleClient,
//     SchoolDistrictClient,
//     StateClient,
//     StorageTypeClient,
//     SubCategoryClient,
//     SuggestedProductClient,
//     UserClient,
//     UserActionLogClient,
//     ApiHealthClient,
// } from './'

// import {
//     IAllergenClient as IAllergenClientToken,
//     ICategoryClient as ICategoryClientToken,
//     IDashBoardClient as IDashBoardClientToken,
//     IDataMigrationThroughApiClient as IDataMigrationThroughApiClientToken,
//     IDefinedFilterClient as IDefinedFilterClientToken,
//     IDistributorClient as IDistributorClientToken,
//     IErrorLogClient as IErrorLogClientToken,
//     IIIocCategoryClient as IIIocCategoryClientToken,
//     IIngredientClient as IIngredientClientToken,
//     IManufacturerClient as IManufacturerClientToken,
//     IMonthlyNumberClient as IMonthlyNumberClientToken,
//     IOneWorldSyncProductClient as IOneWorldSyncProductClientToken,
//     IProductClient as IProductClientToken,
//     IReportClient as IReportClientToken,
//     IRoleClient as IRoleClientToken,
//     ISchoolDistrictClient as ISchoolDistrictClientToken,
//     IStateClient as IStateClientToken,
//     IStorageTypeClient as IStorageTypeClientToken,
//     ISubCategoryClient as ISubCategoryClientToken,
//     ISuggestedProductClient as ISuggestedProductClientToken,
//     IUserClient as IUserClientToken,
//     IUserActionLogClient as IUserActionLogClientToken,
//     IApiHealthClient as IApiHealthClientToken,
// } from '../Tokens'

// import type {
//     IAllergenClient,
//     ICategoryClient,
//     IDashBoardClient,
//     IDataMigrationThroughApiClient,
//     IDefinedFilterClient,
//     IDistributorClient,
//     IErrorLogClient,
//     IIIocCategoryClient,
//     IIngredientClient,
//     IManufacturerClient,
//     IMonthlyNumberClient,
//     IOneWorldSyncProductClient,
//     IProductClient,
//     IReportClient,
//     IRoleClient,
//     ISchoolDistrictClient,
//     IStateClient,
//     IStorageTypeClient,
//     ISubCategoryClient,
//     ISuggestedProductClient,
//     IUserClient,
//     IUserActionLogClient,
//     IApiHealthClient,
// } from '../'

// export type InterfaceMap = {
//     [IAllergenClientToken]:IAllergenClient;
//     [ICategoryClientToken]:ICategoryClient,
//     [IDashBoardClientToken]:IDashBoardClient,
//     [IDataMigrationThroughApiClientToken]:IDataMigrationThroughApiClient,
//     [IDefinedFilterClientToken]:IDefinedFilterClient,
//     [IDistributorClientToken]:IDistributorClient,
//     [IErrorLogClientToken]:IErrorLogClient,
//     [IIIocCategoryClientToken]:IIIocCategoryClient,
//     [IIngredientClientToken]:IIngredientClient,
//     [IManufacturerClientToken]:IManufacturerClient,
//     [IMonthlyNumberClientToken]:IMonthlyNumberClient,
//     [IOneWorldSyncProductClientToken]:IOneWorldSyncProductClient,
//     [IProductClientToken]:IProductClient,
//     [IReportClientToken]:IReportClient,
//     [IRoleClientToken]:IRoleClient,
//     [ISchoolDistrictClientToken]:ISchoolDistrictClient,
//     [IStateClientToken]:IStateClient,
//     [IStorageTypeClientToken]:IStorageTypeClient,
//     [ISubCategoryClientToken]:ISubCategoryClient,
//     [ISuggestedProductClientToken]:ISuggestedProductClient,
//     [IUserClientToken]:IUserClient,
//     [IUserActionLogClientToken]:IUserActionLogClient,
//     [IApiHealthClientToken]:IApiHealthClient,
// }

// type InterfaceToken = keyof InterfaceMap;
// type ConstructorMap = {
//   [K in InterfaceToken]: new (baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) => InterfaceMap[K];
// };

// interface IClientFactory {
//     Create<T extends InterfaceToken>(
//     token: T,
//     baseUrl?: string,
//     http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
//   ): InterfaceMap[T];
// }

// // Simple factory implementation - removing complex registry for now
// class ClientFactory implements IClientFactory 
// {
//   public Create<T extends InterfaceToken>(
//     token: T,
//     baseUrl?: string,
//     http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
//   ): InterfaceMap[T] {
//     // Simple switch-based implementation for now
//     switch (token as string) {
//       case 'IAllergenClient':
//         return new AllergenClient(baseUrl, http) as InterfaceMap[T];
//       case 'ICategoryClient':
//         return new CategoryClient(baseUrl, http) as InterfaceMap[T];
//       case 'IProductClient':
//         return new ProductClient(baseUrl, http) as InterfaceMap[T];
//       case 'IIngredientClient':
//         return new IngredientClient(baseUrl, http) as InterfaceMap[T];
//       case 'IUserClient':
//         return new UserClient(baseUrl, http) as InterfaceMap[T];
//       default:
//         throw new Error(`No client registered for token: ${String(token)}`);
//     }
//   }
// }

// export default ClientFactory;
// export type { IClientFactory };
//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

// Models 
import type {
    IQueryUserModelSearchQuery,
    IQueryUserModelPagedQueryResult,
    IQueryUserModel,
    ISaveUserModel,
    INewUserEmailModel,
 } from "./Models";
 
export type {
    IQueryUserModelSearchQuery,
    IQueryUserModelPagedQueryResult,
    IQueryUserModel,
    ISaveUserModel,
    INewUserEmailModel,
 };

export default interface IUserClient {
    /**
    * Query **QueryUserModel**
    * @description Query **QueryUserModel**
    * @operationId User_Query
    * @tag User
    * @tag model-query
    * @path /api/User/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryUserModel
    */
    Query(params: {
        body?: IQueryUserModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryUserModelSearchQuery        
    }): Promise<IQueryUserModelPagedQueryResult | undefined>;
    /**
    * Get **QueryUserModel**
    * @description Get **QueryUserModel**
    * @operationId User_Get
    * @tag User
    * @tag model-getter
    * @path /api/User/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryUserModel
    */ 
    Get(params: {
            id?: number | undefined;
            email?: string | undefined;
            objectid?: string | undefined;
    }): Promise<IQueryUserModel | undefined>;
    /**
    * Save **QueryUserModel**
    * @description Save **QueryUserModel**
    * @operationId User_Save
    * @tag User
    * @tag model-setter
    * @path /api/User/Save 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryUserModel
    */
    Save(params: {
        body?: ISaveUserModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveUserModel        
    }): Promise<IQueryUserModel | undefined>;
    /**
    * @operationId User_SendNewUserEmail
    * @tag User
    * @path /api/User/SendNewUserEmail 
    * @anonymous false
    */
    SendNewUserEmail(params: {
        body?: INewUserEmailModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Users.NewUserEmailModel        
    }): Promise<void>;
}
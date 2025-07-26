//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryUserModelSearchQuery } from "./Models/IQueryUserModelSearchQuery";
import type { IQueryUserModelPagedQueryResult } from "./Models/IQueryUserModelPagedQueryResult";
import type { IQueryUserModel } from "./Models/IQueryUserModel";
import type { ISaveUserModel } from "./Models/ISaveUserModel";
import type { INewUserEmailModel } from "./Models/INewUserEmailModel";

export type { IQueryUserModelSearchQuery };
export type { IQueryUserModelPagedQueryResult };
export type { IQueryUserModel };
export type { ISaveUserModel };
export type { INewUserEmailModel };

type integer = number;

export interface IUserClient {

    /**
    *
    * Query **QueryUserModel**
    *
    * @description Query **QueryUserModel**
    * @operationId User_Query
    * @tag User
    * @tag model-query
    * @path /api/User/Query
    */
    Query(params: {
        body?: IQueryUserModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryUserModelSearchQuery
    }): Promise<IQueryUserModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryUserModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryUserModel**
    *
    * @description Get **QueryUserModel**
    * @operationId User_Get
    * @tag User
    * @tag model-getter
    * @path /api/User/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            email?: string | undefined; // 
            objectid?: string | undefined; // 
    }): Promise<IQueryUserModel>;
    /**
    *
    * Save **QueryUserModel**
    *
    * @description Save **QueryUserModel**
    * @operationId User_Save
    * @tag User
    * @tag model-setter
    * @path /api/User/Save
    */
    Save(params: {
        body?: ISaveUserModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveUserModel
    }): Promise<IQueryUserModel>; // #/components/schemas/GreenOnion.Common.Models.QueryUserModel
    
    /**
    *
    * 
    *
    * @description 
    * @operationId User_SendNewUserEmail
    * @tag User
    * @path /api/User/SendNewUserEmail
    */
    

}

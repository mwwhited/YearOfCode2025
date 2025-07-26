//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

type integer = number;

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

export interface IUserClient {

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
//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

// Interface
import { ClientBase } from "./_ClientBase";
import type { IDataMigrationThroughApiClient } from "./IDataMigrationThroughApiClient";

type integer = number;

// Models 
import { DataMigrationThroughApiResponseModel } from "./Models/DataMigrationThroughApiResponseModel";
import type { IDataMigrationThroughApiResponseModel } from "./Models/IDataMigrationThroughApiResponseModel";

// Exports
export type { IDataMigrationThroughApiClient };

export type { IDataMigrationThroughApiResponseModel };

export class DataMigrationThroughApiClient extends ClientBase implements IDataMigrationThroughApiClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * @operationId DataMigrationThroughApi_ProductH7DataMigration
    * @tag DataMigrationThroughApi
    * @path /api/DataMigrationThroughApi/ProductH7DataMigration 
    * @anonymous false
    * @role Super Admin
    */
    ProductH7DataMigration(): Promise<IDataMigrationThroughApiResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DataMigrationThroughApi/ProductH7DataMigration?";
        url_ = url_.replace(/[?&]$/, "");
        const options_: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processProductH7DataMigration(_response);
        });
    }

    protected processProductH7DataMigration(response: Response): Promise<IDataMigrationThroughApiResponseModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DataMigrationThroughApiResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IDataMigrationThroughApiResponseModel | undefined>(null as any);
    }
}

//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IProductUploadModel } from "./IProductUploadModel";
import { ZProductUploadModel } from "./ZProductUploadModel";

type integer = number;

export class ProductUploadModel implements IProductUploadModel {
    readonly $zod: typeof ZProductUploadModel = ZProductUploadModel;
    
    districtId?: integer | undefined;
    mrfcode?: string | undefined;
    idnumber?: integer | undefined;
    ingredients?: string | undefined;
    manufacturer?: string | undefined;
    brandName?: string | undefined;
    category?: integer | undefined;
    productName?: string | undefined;
    subCategory1?: integer | undefined;
    subCategory2?: integer | undefined;
    distributor?: string | undefined;
    serving?: string | undefined;
    totalCalories?: string | undefined;
    totalCarbohydrates?: string | undefined;
    sugars?: string | undefined;
    totalProtein?: string | undefined;
    addedSugars?: string | undefined;
    totalFat?: string | undefined;
    saturatedFat?: string | undefined;
    transFat?: string | undefined;
    cholesterol?: string | undefined;
    dietaryFiber?: string | undefined;
    sodium?: string | undefined;
    uploadPdf?: string | undefined;
    isActive?: boolean | undefined;
    createdon?: string | undefined;
    modifiedon?: string | undefined;
    createdby?: integer | undefined;
    modifiedby?: integer | undefined;
    districtName?: string | undefined;
    upcGtin?: string | undefined;
    allergens?: integer | undefined;
    image?: string | undefined;
    h7?: integer | undefined;
    reviewflag?: boolean | undefined;
    allergenKeyword?: string | undefined;
    allergenreviewflag?: boolean | undefined;
    productDescription?: string | undefined;
    vendor?: string | undefined;
    igGroup?: string | undefined;
    gtin?: string | undefined;
    upc?: string | undefined;
    manufacturerId?: integer | undefined;
    status?: boolean | undefined;
    statusMessage?: string | undefined;
    isMapping?: boolean | undefined;

    constructor(data?: IProductUploadModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<IProductUploadModel>) {
        if (_data) {
            (<any>this).districtId = _data["districtId"];
            (<any>this).mrfcode = _data["mrfcode"];
            (<any>this).idnumber = _data["idnumber"];
            (<any>this).ingredients = _data["ingredients"];
            (<any>this).manufacturer = _data["manufacturer"];
            (<any>this).brandName = _data["brandName"];
            (<any>this).category = _data["category"];
            (<any>this).productName = _data["productName"];
            (<any>this).subCategory1 = _data["subCategory1"];
            (<any>this).subCategory2 = _data["subCategory2"];
            (<any>this).distributor = _data["distributor"];
            (<any>this).serving = _data["serving"];
            (<any>this).totalCalories = _data["totalCalories"];
            (<any>this).totalCarbohydrates = _data["totalCarbohydrates"];
            (<any>this).sugars = _data["sugars"];
            (<any>this).totalProtein = _data["totalProtein"];
            (<any>this).addedSugars = _data["addedSugars"];
            (<any>this).totalFat = _data["totalFat"];
            (<any>this).saturatedFat = _data["saturatedFat"];
            (<any>this).transFat = _data["transFat"];
            (<any>this).cholesterol = _data["cholesterol"];
            (<any>this).dietaryFiber = _data["dietaryFiber"];
            (<any>this).sodium = _data["sodium"];
            (<any>this).uploadPdf = _data["uploadPdf"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).createdon = _data["createdon"];
            (<any>this).modifiedon = _data["modifiedon"];
            (<any>this).createdby = _data["createdby"];
            (<any>this).modifiedby = _data["modifiedby"];
            (<any>this).districtName = _data["districtName"];
            (<any>this).upcGtin = _data["upcGtin"];
            (<any>this).allergens = _data["allergens"];
            (<any>this).image = _data["image"];
            (<any>this).h7 = _data["h7"];
            (<any>this).reviewflag = _data["reviewflag"];
            (<any>this).allergenKeyword = _data["allergenKeyword"];
            (<any>this).allergenreviewflag = _data["allergenreviewflag"];
            (<any>this).productDescription = _data["productDescription"];
            (<any>this).vendor = _data["vendor"];
            (<any>this).igGroup = _data["igGroup"];
            (<any>this).gtin = _data["gtin"];
            (<any>this).upc = _data["upc"];
            (<any>this).manufacturerId = _data["manufacturerId"];
            (<any>this).status = _data["status"];
            (<any>this).statusMessage = _data["statusMessage"];
            (<any>this).isMapping = _data["isMapping"];
        }
    } 
    
    static fromJS(data: Partial<IProductUploadModel>): IProductUploadModel {
        data = typeof data === 'object' ? data : {};
        const result = new ProductUploadModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["districtId"] = this.districtId;
        data["mrfcode"] = this.mrfcode;
        data["idnumber"] = this.idnumber;
        data["ingredients"] = this.ingredients;
        data["manufacturer"] = this.manufacturer;
        data["brandName"] = this.brandName;
        data["category"] = this.category;
        data["productName"] = this.productName;
        data["subCategory1"] = this.subCategory1;
        data["subCategory2"] = this.subCategory2;
        data["distributor"] = this.distributor;
        data["serving"] = this.serving;
        data["totalCalories"] = this.totalCalories;
        data["totalCarbohydrates"] = this.totalCarbohydrates;
        data["sugars"] = this.sugars;
        data["totalProtein"] = this.totalProtein;
        data["addedSugars"] = this.addedSugars;
        data["totalFat"] = this.totalFat;
        data["saturatedFat"] = this.saturatedFat;
        data["transFat"] = this.transFat;
        data["cholesterol"] = this.cholesterol;
        data["dietaryFiber"] = this.dietaryFiber;
        data["sodium"] = this.sodium;
        data["uploadPdf"] = this.uploadPdf;
        data["isActive"] = this.isActive;
        data["createdon"] = this.createdon;
        data["modifiedon"] = this.modifiedon;
        data["createdby"] = this.createdby;
        data["modifiedby"] = this.modifiedby;
        data["districtName"] = this.districtName;
        data["upcGtin"] = this.upcGtin;
        data["allergens"] = this.allergens;
        data["image"] = this.image;
        data["h7"] = this.h7;
        data["reviewflag"] = this.reviewflag;
        data["allergenKeyword"] = this.allergenKeyword;
        data["allergenreviewflag"] = this.allergenreviewflag;
        data["productDescription"] = this.productDescription;
        data["vendor"] = this.vendor;
        data["igGroup"] = this.igGroup;
        data["gtin"] = this.gtin;
        data["upc"] = this.upc;
        data["manufacturerId"] = this.manufacturerId;
        data["status"] = this.status;
        data["statusMessage"] = this.statusMessage;
        data["isMapping"] = this.isMapping;
        return data;
    }
}

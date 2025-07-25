//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { INutritionalInformationModel } from "./INutritionalInformationModel";
import { ZNutritionalInformationModel } from "./ZNutritionalInformationModel";

type integer = number;

export class NutritionalInformationModel implements INutritionalInformationModel {
    readonly $zod: typeof ZNutritionalInformationModel = ZNutritionalInformationModel;
    
    serving?: number | undefined;
    servingUom?: string | undefined;
    calories?: number | undefined;
    caloriesUom?: string | undefined;
    carbohydrates?: number | undefined;
    carbohydratesUom?: string | undefined;
    protein?: number | undefined;
    proteinUom?: string | undefined;
    totalFat?: number | undefined;
    transFat?: number | undefined;
    saturatedFat?: number | undefined;
    dietaryFiber?: number | undefined;
    dietaryFiberUom?: string | undefined;
    sugar?: number | undefined;
    sugarUom?: string | undefined;
    addedSugar?: number | undefined;
    addedSugarUom?: string | undefined;
    sodium?: number | undefined;
    sodiumUom?: string | undefined;
    cholesterol?: number | undefined;
    cholesterolUom?: string | undefined;

    constructor(data?: INutritionalInformationModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }   
    
    init(_data?: Partial<INutritionalInformationModel>) {
        if (_data) {
            (<any>this).serving = _data["serving"];
            (<any>this).servingUom = _data["servingUom"];
            (<any>this).calories = _data["calories"];
            (<any>this).caloriesUom = _data["caloriesUom"];
            (<any>this).carbohydrates = _data["carbohydrates"];
            (<any>this).carbohydratesUom = _data["carbohydratesUom"];
            (<any>this).protein = _data["protein"];
            (<any>this).proteinUom = _data["proteinUom"];
            (<any>this).totalFat = _data["totalFat"];
            (<any>this).transFat = _data["transFat"];
            (<any>this).saturatedFat = _data["saturatedFat"];
            (<any>this).dietaryFiber = _data["dietaryFiber"];
            (<any>this).dietaryFiberUom = _data["dietaryFiberUom"];
            (<any>this).sugar = _data["sugar"];
            (<any>this).sugarUom = _data["sugarUom"];
            (<any>this).addedSugar = _data["addedSugar"];
            (<any>this).addedSugarUom = _data["addedSugarUom"];
            (<any>this).sodium = _data["sodium"];
            (<any>this).sodiumUom = _data["sodiumUom"];
            (<any>this).cholesterol = _data["cholesterol"];
            (<any>this).cholesterolUom = _data["cholesterolUom"];
        }
    } 
    
    static fromJS(data: Partial<INutritionalInformationModel>): INutritionalInformationModel {
        data = typeof data === 'object' ? data : {};
        const result = new NutritionalInformationModel();
        result.init(data);
        return result;
    }


    toJSON(data?: any) : any {
        data = typeof data === 'object' ? data : {};
        for (const property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["serving"] = this.serving;
        data["servingUom"] = this.servingUom;
        data["calories"] = this.calories;
        data["caloriesUom"] = this.caloriesUom;
        data["carbohydrates"] = this.carbohydrates;
        data["carbohydratesUom"] = this.carbohydratesUom;
        data["protein"] = this.protein;
        data["proteinUom"] = this.proteinUom;
        data["totalFat"] = this.totalFat;
        data["transFat"] = this.transFat;
        data["saturatedFat"] = this.saturatedFat;
        data["dietaryFiber"] = this.dietaryFiber;
        data["dietaryFiberUom"] = this.dietaryFiberUom;
        data["sugar"] = this.sugar;
        data["sugarUom"] = this.sugarUom;
        data["addedSugar"] = this.addedSugar;
        data["addedSugarUom"] = this.addedSugarUom;
        data["sodium"] = this.sodium;
        data["sodiumUom"] = this.sodiumUom;
        data["cholesterol"] = this.cholesterol;
        data["cholesterolUom"] = this.cholesterolUom;
        return data;
    }
}

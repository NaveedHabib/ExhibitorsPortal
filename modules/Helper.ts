import { loggedModel } from "@/sysmodel/loginModel";
import { StandSpaceCategoryModel, StandSpaceItemModel } from "@/sysmodel/StandSpaceModel";
import Globals from "./Globals";
import axios from "axios";

export default class HelperModule {

    static truncateText = (text: string, wordLimit: number) => {
        return text.split(" ").slice(0, wordLimit).join(" ") + (text.split(" ").length > wordLimit ? "..." : "");
    }

    static getLoggedData = () => {
        try {
            const storageItem = localStorage.getItem(Globals.PROJECT_ID);
            if (!storageItem) {
                return null;
            }
            var loggingAccount: loggedModel = JSON.parse(storageItem);

            return loggingAccount;
        }
        catch (e) {
            return null;
        }
    }

    static async getCategories(exhibitorId:string): Promise<Array<StandSpaceCategoryModel>> {
        const response = await axios.get(`${Globals.API_URL}Exhibitor/GetStandSpaceCategories?id=${exhibitorId.toString()}`)
        const dataModel: Array<StandSpaceCategoryModel> = response.data;
        return dataModel
    }

    static async getProducts(categoryId:string, exhibitorId:string): Promise<Array<StandSpaceItemModel>> {
        const response = await axios.get(`${Globals.API_URL}Exhibitor/GetStandSpaceItems?id=${categoryId}&exhibitorId=${exhibitorId}`)
        const dataModel: Array<StandSpaceItemModel> = response.data;
        return dataModel
    }

}
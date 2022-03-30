import api from "common/config/api.service";

export default class HomepageService {
    static async loadNewServiceProducts()
    {
        return api.get('services/new/products/')
    }

    static async loadNewMarketProducts()
    {
        return api.get('markets/new/products/')
    }
}
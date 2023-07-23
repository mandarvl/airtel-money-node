import AuthService from "./auth";
import TransactionService from "./transaction";
import axios, { AxiosRequestConfig } from "axios";

export const STAGING_URL = "https://openapiuat.airtel.africa";
export const PRODUCTION_URL = "https://openapi.airtel.africa";

class AirtelMoney {
  transaction: TransactionService;
  auth: AuthService;

  constructor(baseURL: string = STAGING_URL) {
    const options: AxiosRequestConfig = { baseURL };
    const client = axios.create(options);
    this.auth = new AuthService(axios.create(options));
    this.transaction = new TransactionService(client);
  }
}

export default AirtelMoney;
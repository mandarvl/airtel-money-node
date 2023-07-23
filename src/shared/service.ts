import { AxiosInstance } from "axios";
import { Options } from "./types";

export class Service {
    protected httpClient: AxiosInstance;
  
    constructor(httpClient: AxiosInstance) {
      this.httpClient = httpClient;
    }
  
    setAccessToken(accessToken: string): void {
      this.httpClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    }
  
    setOptions(options: Options): void {
      if (options.country) {
        this.httpClient.defaults.headers.common["X-Country"] =
          options.country;
      }

      if (options.currency) {
        this.httpClient.defaults.headers.common["X-Currency"] =
          options.currency;
      }

      this.httpClient.defaults.headers.common["Cache-Control"] = "no-cache";
    }
}
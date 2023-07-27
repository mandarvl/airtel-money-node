import qs from "qs";
import { Service } from "./shared/service";
import { AuthResponse } from "./shared/types";

class AuthService extends Service {
  async generateToken(
    clientId: string,
    clientSecret: string
  ): Promise<any> {
    const params = qs.stringify({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret
    });

    const { data } = await this.httpClient.post<AuthResponse>("/auth/oauth2/token", params);

    return data;
  }
}

export default AuthService;
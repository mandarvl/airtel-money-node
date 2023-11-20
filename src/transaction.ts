import { Service } from "./shared/service";
import { TransactionRequest, TransactionResponse } from "./shared/types";

class TransactionService extends Service {

    async get(id: string) {
        const { data } = await this.httpClient.get<TransactionResponse>("/standard/v1/payments/" + id);
        return data;
    }

    async sendPayment(params: TransactionRequest): Promise<TransactionResponse> {
        const { data } = await this.httpClient.post<TransactionResponse>("/merchant/v1/payments/", params);
        return data;
    }
}

export default TransactionService;
export interface AuthResponse {
    access_token: string,
    expires_in: number,
    token_type: string
}

export interface Options {
    country: string,
    currency: string,
}

export enum TransactionStatus {
  Failed = "TF",
  Success = "TS",
  Ambiguous = "TA",
  InProgress = "TIP"
}

export interface TransactionRequest {
    reference: string,
    subscriber: {
      country?: string,
      currency?: string,
      msisdn: string
    },
    transaction: {
      amount: number,
      country?: string,
      currency?: string,
      id: string
    }
}

export interface TransactionResponse {
    data: {
      transaction: {
        id: string,
        status: TransactionStatus,
        airtel_money_id?: string,
        message?: string
      }
    },
    status: {
      code: number,
      message: string,
      result_code: string,
      response_code: string,
      success: true
    }
}
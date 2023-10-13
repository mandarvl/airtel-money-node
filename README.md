# airtel-money-node
Airtel Money payment API integration in Node.JS

## Installation
`npm install airtel-money-node`

## Usage
```typescript
const clientKey = process.env.AIRTEL_CLIENT_ID;
const clientSecret = process.env.AIRTEL_CLIENT_SECRET;
const airtelMoney = new AirtelMoney(STAGING_URL);
const data = await airtelMoney.auth.generateToken(clientKey!, clientSecret!);

airtelMoney.transaction.setAccessToken(data.access_token);
airtelMoney.transaction.setOptions({
      country: 'MG',
      currency: 'MGA'
});

const params: TransactionRequest = {
      reference: 'test_payment',
      subscriber: {
          msisdn: +phoneNumber
      },
      transaction: {
          amount,
          id: v4(),
          country: 'MG',
          currency: 'MGA'
      }
}

const response = await airtelMoney.transaction.sendPayment(params);
console.log(response);
```

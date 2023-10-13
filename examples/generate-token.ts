import { AirtelMoney, STAGING_URL } from "../src";

async function main() {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const airtel = new AirtelMoney(STAGING_URL);
  const data = await airtel.auth.generateToken(clientId!, clientSecret!);
  console.log(data);
}

main();
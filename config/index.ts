import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export const network='mainnet'
export const getAllTokenPrice = async () => {
  const prices = (await axios.get("https://api.raydium.io/v2/main/price")).data;
  
  return prices;
};

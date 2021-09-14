import data from "../json/data.json";

export const fetchCurrencies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data;
};

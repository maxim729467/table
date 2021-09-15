import data from "../json/data.json";

export const fetchCurrencies = async () => {
  return await new Promise((onResolve, onReject) => {
    setTimeout(() => {
      onResolve(data);
      onReject("error occured");
    }, 2000);
  });
};

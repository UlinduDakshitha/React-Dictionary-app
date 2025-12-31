 import axios from "axios";

const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries",
});

export const getWord = (word) => {
  return api.get(`/en_US/${word}`);
};

export default api;

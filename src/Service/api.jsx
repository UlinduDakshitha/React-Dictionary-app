 import axios from "axios";

const api = axios.create({
  baseURL: " https://api.dictionaryapi.dev/api/v2/entries/en_US/",
});

export const getWord = (word) => {
  return api.get(`/${word}`);
};

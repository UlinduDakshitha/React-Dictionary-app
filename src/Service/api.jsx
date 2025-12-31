import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getWords = () => API.get("/words");
export const addWord = (data) => API.post("/words", data);

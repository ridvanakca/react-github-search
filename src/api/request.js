import axios from "axios";

const baseURL = "https://api.github.com/search";

const instance = axios.create({
  baseURL,
});

export default instance;

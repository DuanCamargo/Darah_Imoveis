import axios from "axios";

export default axios.create({
  baseURL: "https://61329c8fab7b1e001799b575.mockapi.io/",
  headers: {
    "Content-type": "application/json",
  }
});
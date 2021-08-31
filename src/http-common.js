import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:8081/",
  headers: {
    "Content-type": "application/json"
  }
});
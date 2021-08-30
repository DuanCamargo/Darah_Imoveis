import axios from "axios";

export default axios.create({
  baseURL: "https://60c64c1319aa1e001769f199.mockapi.io/",
  headers: {
    "Content-type": "application/json"
  }
});
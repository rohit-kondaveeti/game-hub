import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e6eef8e086c84998b1d2ab41bfec7905",
  },
});

import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export default apiClient;

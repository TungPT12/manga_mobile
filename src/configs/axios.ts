import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://mangaverse-api.p.rapidapi.com/",
  // run key: boypham12042000@gmail.com
  headers: {
    "X-RapidAPI-Key": process.env.API_RAPID_KEY,
    "X-RapidAPI-Host": process.env.API_RAPID_HOST,
  },
});

const axiosClient = axios.create({
  baseURL: "https://mangaverse-api.p.rapidapi.com/",
  // run key: boypham12042000@gmail.com
  headers: {
    "X-RapidAPI-Key": process.env.API_RAPID_KEY,
    "X-RapidAPI-Host": process.env.API_RAPID_HOST,
  },
});
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error);
    return error;
  }
);

export default axiosInstance;
export { axiosClient };

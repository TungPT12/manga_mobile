import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://mangaverse-api.p.rapidapi.com/",
  // run key: boypham12042000@gmail.com
  headers: {
    "X-RapidAPI-Key": process.env.API_RAPID_KEY,
    "X-RapidAPI-Host": process.env.API_RAPID_HOST,
  },
  // key: test
  // headers: {
  //   "X-RapidAPI-Key": "63cc0b3350mshf70a1c17cee92d6p13ef63jsn312cf86d034b",
  //   "X-RapidAPI-Host": "mangaverse-api.p.rapidapi.com",
  // },
});

const axiosClient = axios.create({
  baseURL: "https://mangaverse-api.p.rapidapi.com/",
  // run key: boypham12042000@gmail.com
  headers: {
    "X-RapidAPI-Key": process.env.API_RAPID_KEY,
    "X-RapidAPI-Host": process.env.API_RAPID_HOST,
  },
  // key: test
  // headers: {
  //   "X-RapidAPI-Key": "63cc0b3350mshf70a1c17cee92d6p13ef63jsn312cf86d034b",
  //   "X-RapidAPI-Host": "mangaverse-api.p.rapidapi.com",
  // },
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

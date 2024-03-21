import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mangaverse-api.p.rapidapi.com/",
    headers: {
        'X-RapidAPI-Key': '1aa71f5f5fmshbe60c425ee43d47p1774dfjsn6772ef0ab7f9',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    }

})

const axiosClient = axios.create({
    baseURL: "https://mangaverse-api.p.rapidapi.com/",
    headers: {
        'X-RapidAPI-Key': '1aa71f5f5fmshbe60c425ee43d47p1774dfjsn6772ef0ab7f9',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    }
})
axiosClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.log(error)
    return error;
})

export default axiosInstance;
export {
    axiosClient
}
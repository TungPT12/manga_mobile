import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mangaverse-api.p.rapidapi.com/",
    // headers: {
    //     'X-RapidAPI-Key': '3bec7d9ce1msh914f0164bd87f9ap16a375jsncf9c1b318137',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    headers: {
        'X-RapidAPI-Key': 'ade66d3a99mshdd7ef3b70e67867p16ce05jsnf5085f5ada03',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'

    }
    // baseURL: "https://manga-be.onrender.com/api/"
})

const axiosClient = axios.create({
    baseURL: "https://mangaverse-api.p.rapidapi.com/",
    headers: {
        'X-RapidAPI-Key': 'ade66d3a99mshdd7ef3b70e67867p16ce05jsnf5085f5ada03',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'

    }
    // headers: {
    //     'X-RapidAPI-Key': '3bec7d9ce1msh914f0164bd87f9ap16a375jsncf9c1b318137',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
})
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

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
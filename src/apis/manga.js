import axiosInstance from "../configs/axios";

const getMangasApi = async () => {
    try {
        const response = await axiosInstance.get('/manga/fetch?page=1&nsfw=true&type=all')
        // const response = await axiosInstance.get('/mangas');
        return response;
    } catch (error) {
        console.log(error.toString())
        return error.response;
    }
}

export {
    getMangasApi,
}
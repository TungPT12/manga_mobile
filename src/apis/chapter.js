import axiosInstance from "../configs/axios";

const getChaptersByMangaIdApi = async (id) => {
    try {
        const response = await axiosInstance.get(`/manga/chapters/${id}`);
        return response;
    } catch (error) {
        console.log(error)
        return error.response;
    }
}

export {
    getChaptersByMangaIdApi,
}
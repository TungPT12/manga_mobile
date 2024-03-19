import axiosInstance from "../configs/axios";

const getImagesByChapterIdApi = async (chapterId) => {
    try {
        const response = await axiosInstance.get(`/manga/image?id=${chapterId}`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export {
    getImagesByChapterIdApi,
}
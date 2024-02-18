import axiosInstance from "../configs/axios";

const getImagesByChapterIdApi = async (chapterId) => {
    try {
        const response = await axiosInstance.get(`/chapter/images/${chapterId}`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export {
    getImagesByChapterIdApi,
}
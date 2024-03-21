import axiosInstance, { axiosClient } from "../configs/axios";

const imageService = {
    getImagesManga: async (chapterId: string): Promise<ImageResponse> => {
        return axiosClient.get(`/manga/image?id=${chapterId}`);
    }
}

export default imageService;
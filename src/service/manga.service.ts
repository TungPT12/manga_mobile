import { axiosClient } from "../configs/axios";

const mangaServices = {
    getMangaPerPage: async (page: number): Promise<MangaResponse> => {
        return axiosClient.get(`/manga/fetch?page=${page}&nsfw=true&type=all`)
    }
}

export {
    mangaServices
}
import { axiosClient } from "../configs/axios";

const mangaServices = {
  getMangaPerPage: async (page: number): Promise<MangaResponse> => {
    return axiosClient.get(`/manga/fetch?page=${page}&nsfw=true&type=all`);
  },
  getMangaByGenres: async (page: number, genres: string) => {
    return axiosClient.get(
      `/manga/fetch?page=${page}&genres=${genres}&nsfw=true&type=genres`
    );
  },
  getMangaById: async (id: string[]) => {
    return axiosClient.get(`/manga?id=${id}`);
  },
  getMangasById: async (listId: string[]) => {
    return Promise.all(
      listId.map((id: string) => {
        return axiosClient.get(`/manga?id=${id}`);
      })
    );
    // return axiosClient.get(`/manga?id=${id}`);
  },
};
// https://mangaverse-api.p.rapidapi.com/manga/fetch?page=1&genres=Harem,Fantasy&nsfw=true&type=all
export default mangaServices;

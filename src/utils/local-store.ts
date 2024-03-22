import AsyncStorage from "@react-native-async-storage/async-storage";

const localStore = {
  storeData: async (idManga: string) => {
    try {
      let like_manga = [];
      const value = await AsyncStorage.getItem("like_manga");
      if (value !== null) {
        like_manga = JSON.parse(value);
      }
      const position = like_manga.findIndex((id: string) => {
        return id === idManga;
      });
      if (position > -1) {
        like_manga.splice(position, 1);
      } else {
        like_manga.push(idManga);
      }
      await AsyncStorage.setItem("like_manga", JSON.stringify(like_manga));
      return "Success";
    } catch (error) {
      return [];
    }
  },
  getData: async () => {
    try {
      const value = await AsyncStorage.getItem("like_manga");
      if (value !== null) {
        return JSON.parse(value);
      }
      return [];
    } catch (e) {
      return [];
    }
  },
};

export default localStore;

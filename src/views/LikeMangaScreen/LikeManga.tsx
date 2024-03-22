import { Text, View } from "react-native";
import localStore from "../../utils/local-store";
import mangaServices from "../../service/manga.service";

function LikeManga() {
  // const getAllManga = () => {

  // }
  localStore
    .getData()
    .then((listId) => {
      // console.log(listId);
      return Promise.all(
        listId.map((id: string) => {
          return mangaServices.getMangaById(id);
        })
      ).then((response) => {
        return response;
      });
    })
    .then((datas) => {
      console.log(datas);
    })
    .then(() => {})
    .catch(() => {});
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}

export default LikeManga;

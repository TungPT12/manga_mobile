import { FlatList, Pressable, Text, View } from "react-native";
import localStore from "../../utils/local-store";
import mangaServices from "../../service/manga.service";
import styles from "./LikeManga.css";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Header from "../../components/Header/Header";
import HeaderWithNavbarLeft from "../../components/HeaderWithNavbarLeft/HeaderWithNavbarLeft";
import { useEffect, useState } from "react";
import MangaCard from "../../components/MangaCard/MangaCard";
import useSWR from "swr";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function LikeManga({ navigation }) {
  const [listMangas, setListMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const listId = localStore.getData();
  console.log(listId);
  // const { data } = useSWR("GET_YOUR_MANGAS");
  const getYourMangas = () => {
    localStore
      .getData()
      .then((listId: string[]) => {
        return mangaServices.getMangasById(listId);
      })
      .then((data) => {
        setIsLoading(false);
        setListMangas(data);
      })
      .catch((error: Error) => {
        console.log(error.message);
        setListMangas([]);
      });
  };

  useEffect(() => {
    getYourMangas();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithNavbarLeft
        navigation={navigation}
        handleFunction={() => {
          setIsLoading(true);
        }}
        title={"Your Mangas"}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <FlatList
          keyExtractor={(item) => item.data.id}
          data={listMangas}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <MangaCard
                id={item.data.id}
                authors={item.data.authors}
                genres={item.data.genres}
                navigation={navigation}
                status={item.data.status}
                sub_title={item.data.sub_title}
                summary={item.data.summary}
                title={item.data.title}
                url={item.data.thumb}
                key={item.data.id}
              />
            );
          }}
        />
      )}
    </View>
  );
}

export default LikeManga;

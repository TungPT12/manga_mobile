import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StatusBar, Text, View } from "react-native";
import MangaCard from "../../components/MangaCard/MangaCard";
import HeaderHome from "./HeaderHome";
import { mangaServices } from "../../service/manga.service";
import NavbarLeft from "../NavbarLeft/NavbarLeft";
import styles from "./Home.css";
import useSWR, { mutate } from "swr";

function Home({ navigation }) {
  const [isShowNavbarLeft, setIsShowNavbarLeft] = useState(false);
  const [page, setPage] = useState(1);
  const { data: mangaResponse } = useSWR("GET_MANGAS", () => {
    return mangaServices.getMangaPerPage(page);
  });
  useEffect(() => {
    mutate("GET_MANGAS");
  }, [page]);

  return (
    <View style={styles.home}>
      {isShowNavbarLeft ? (
        <NavbarLeft setIsShowNavbarLeft={setIsShowNavbarLeft} />
      ) : (
        <></>
      )}
      <HeaderHome setIsShowNavbarLeft={setIsShowNavbarLeft} />
      <Pressable
        onPress={() => {
          setPage(page + 1);
        }}
      >
        <Text>Click</Text>
      </Pressable>
      <FlatList
        keyExtractor={(item) => item.id}
        data={
          mangaResponse.code == 200
            ? mangaResponse.data.length > 0
              ? mangaResponse.data
              : []
            : []
        }
        numColumns={2}
        key={2}
        renderItem={({ item }) => {
          return (
            <MangaCard
              navigation={navigation}
              authors={item.authors}
              id={item.id}
              title={item.title}
              url={item.thumb}
              sub_title={item.sub_title}
              status={item.status}
              genres={item.genres}
              summary={item.summary}
            />
          );
        }}
      />
    </View>
  );
}

export default Home;

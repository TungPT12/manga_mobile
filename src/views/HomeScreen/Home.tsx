import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import MangaCard from "../../components/MangaCard/MangaCard";
import HeaderHome from "./HeaderHome";
import mangaServices from "../../service/manga.service";
import NavbarLeft from "../NavbarLeft/NavbarLeft";
import styles from "./Home.css";
import useSWR, { mutate } from "swr";
import PageSize from "../../components/PageSize/PageSize";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function Home({ navigation }) {
  const [isShowNavbarLeft, setIsShowNavbarLeft] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { data: mangaResponse } = useSWR("GET_MANGAS", () => {
    return mangaServices.getMangaPerPage(page);
  });

  useEffect(() => {
    mutate("GET_MANGAS");
  }, [page]);

  useEffect(() => {
    if (mangaResponse) {
      setIsLoading(false);
    }
  }, [mangaResponse]);

  return (
    <View style={styles.home}>
      {isShowNavbarLeft ? (
        <NavbarLeft
          navigation={navigation}
          setIsShowNavbarLeft={setIsShowNavbarLeft}
        />
      ) : (
        <></>
      )}
      <HeaderHome
        title={"Trang chủ"}
        setIsShowNavbarLeft={setIsShowNavbarLeft}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <FlatList
            keyExtractor={(item) => item.id}
            data={
              mangaResponse
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
          <PageSize
            page={page}
            handlePreviousPage={() => {
              setIsLoading(true);
              setPage(page - 1);
            }}
            handleNextPage={() => {
              setIsLoading(true);
              setPage(page + 1);
            }}
          />
        </>
      )}
    </View>
  );
}

export default Home;

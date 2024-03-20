import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import MangaCard from "../../components/MangaCard/MangaCard";
import FilterMangaHeader from "./FilterMangaHeader";
import NavbarLeft from "../NavbarLeft/NavbarLeft";
import styles from "./FilterManga.css";
import useSWR, { mutate } from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PageSize from "../../components/PageSize/PageSize";
import mangaServices from "../../service/manga.service";

function FilterManga({ navigation, route }) {
  const [isShowNavbarLeft, setIsShowNavbarLeft] = useState(false);
  const [page, setPage] = useState(1);
  const { genres } = route.params;
  const { data: mangaResponse } = useSWR("GET_MANGAS_BY_GENRES", () => {
    return mangaServices.getMangaByGenres(page, genres);
  });
  useEffect(() => {
    mutate("GET_MANGAS_BY_GENRES");
  }, [page]);
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
      <FilterMangaHeader
        navigation={navigation}
        setIsShowNavbarLeft={setIsShowNavbarLeft}
      />
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
          setPage(page - 1);
        }}
        handleNextPage={() => {
          setPage(page + 1);
        }}
      />
    </View>
  );
}

export default FilterManga;

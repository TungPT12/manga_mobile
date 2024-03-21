import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import MangaImage from "../../components/MangaImage/MangaImage";
import styles from "./MangaImage.css";
import imageService from "../../service/image.service";
import useSWR from "swr";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Header from "../../components/Header/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function MangaImages({ navigation, route }) {
  const { idChapter, name } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const { data: imageResponse = null } = useSWR(
    "GET_IMAGES",
    idChapter
      ? () => {
          return imageService.getImagesManga(idChapter);
        }
      : null
  );

  useEffect(() => {
    if (imageResponse) {
      setIsLoading(false);
    }
  }, [imageResponse]);

  return (
    <View style={styles.container}>
      <Header>
        <View style={styles.headerImageManga}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={25} />
          </Pressable>
          <Text numberOfLines={1} style={styles.textHeaderTitle}>
            {name}
          </Text>
        </View>
      </Header>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={imageResponse ? imageResponse.data : []}
          renderItem={({ item }) => {
            return <MangaImage key={item.id} url={item.link} />;
          }}
        />
      )}
    </View>
  );
}

export default MangaImages;

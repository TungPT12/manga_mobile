import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./MangaCard.css";

function MangaCard({
  navigation,
  url,
  title,
  id,
  authors,
  sub_title,
  status,
  genres,
  summary,
}) {
  return (
    <View style={styles.mangaCardContainer}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.image}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("detail", {
            id: id,
            url: url,
            title: title,
            authors: authors,
            sub_title: sub_title,
            status: status,
            genres: genres,
            summary: summary,
          });
        }}
      >
        <Text numberOfLines={2} style={styles.mangaName}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

export default MangaCard;

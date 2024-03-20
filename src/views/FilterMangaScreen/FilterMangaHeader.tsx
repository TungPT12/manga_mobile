import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, View } from "react-native";
import {
  faAlignCenter,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Header from "../../components/Header/Header";
import styles from "./FilterManga.css";

function FilterMangaHeader({ navigation, setIsShowNavbarLeft }) {
  return (
    <Header>
      <View
        style={{
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 9,
        }}
      >
        <Pressable
          onPress={() => {
            setIsShowNavbarLeft(true);
          }}
        >
          <FontAwesomeIcon icon={faAlignJustify} color="#9a9a9a" size={28} />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("genres");
          }}
        >
          <FontAwesomeIcon
            icon={faAlignCenter}
            size={28}
            style={styles.iconAlignCenter}
          />
        </Pressable>
      </View>
    </Header>
  );
}

export default FilterMangaHeader;

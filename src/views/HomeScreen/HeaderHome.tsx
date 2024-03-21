import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, Text, View } from "react-native";
import { faAlignJustify, faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Home.css";

function HeaderHome({ title, setIsShowNavbarLeft }) {
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
        <View style={styles.leftHeader}>
          <Pressable
            onPress={() => {
              setIsShowNavbarLeft(true);
            }}
          >
            <FontAwesomeIcon color="#9a9a9a" icon={faAlignJustify} size={28} />
          </Pressable>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faHeart} size={28} color="red" />
        </Pressable>
      </View>
    </Header>
  );
}

export default HeaderHome;

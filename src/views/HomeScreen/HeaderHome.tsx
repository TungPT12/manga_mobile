import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, View } from "react-native";
import { faAlignJustify, faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Header from "../../components/Header/Header";

function HeaderHome({ setIsShowNavbarLeft }) {
  return (
    <Header>
      <View
        style={{
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 9,
          // backgroundColor: "#f2f2f2",
        }}
      >
        <Pressable
          onPress={() => {
            setIsShowNavbarLeft(true);
          }}
        >
          <FontAwesomeIcon icon={faAlignJustify} size={28} />
        </Pressable>
        <FontAwesomeIcon icon={faHeart} size={28} color="red" />
      </View>
    </Header>
  );
}

export default HeaderHome;

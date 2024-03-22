import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Header from "../Header/Header";
import { Pressable, Text, View } from "react-native";
import styles from "./HeaderWithNavbarLeft.css";
import NavbarLeft from "../../views/NavbarLeft/NavbarLeft";
import { useState } from "react";

function HeaderWithNavbarLeft({ navigation, handleFunction, title }) {
  const [isShowNavbarLeft, setIsShowNavbarLeft] = useState(false);

  return (
    <>
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
              <FontAwesomeIcon
                color="#9a9a9a"
                icon={faAlignJustify}
                size={28}
              />
            </Pressable>
            <Text style={styles.textTitle}>{title}</Text>
          </View>
        </View>
      </Header>
      {isShowNavbarLeft ? (
        <NavbarLeft
          handleFunction={handleFunction}
          navigation={navigation}
          setIsShowNavbarLeft={setIsShowNavbarLeft}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default HeaderWithNavbarLeft;

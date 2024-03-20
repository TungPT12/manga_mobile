import { Animated, Pressable, ScrollView, Text, View } from "react-native";
import styles from "./NavbarLeft.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faClose,
  faHeart,
  faHouse,
  faList12,
  faListDots,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";

function NavbarLeft({ setIsShowNavbarLeft }) {
  const leftToRight = useRef(new Animated.Value(-1000)).current;
  Animated.timing(leftToRight, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  return (
    <Animated.View
      style={{
        ...styles.wrapperHeaderLeft,
        transform: [{ translateX: leftToRight }],
      }}
    >
      <Header>
        <View style={styles.headerLeft}>
          <Text>MANGA</Text>
          <Pressable
            onPress={() => {
              setIsShowNavbarLeft(false);
            }}
          >
            <FontAwesomeIcon icon={faClose} size={25} style={styles.icon} />
          </Pressable>
        </View>
      </Header>
      <ScrollView style={styles.scrollView}>
        <Pressable style={styles.wrapItem}>
          <FontAwesomeIcon icon={faHouse} size={25} style={styles.icon} />
          <Text style={styles.text}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.wrapItem}>
          <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
          <Text style={styles.text}>Theo dõi</Text>
        </Pressable>
        <Pressable style={styles.wrapItem}>
          <FontAwesomeIcon icon={faListDots} size={25} style={styles.icon} />
          <Text style={styles.text}>Thể loại</Text>
        </Pressable>
        <Pressable style={styles.wrapItem}>
          <FontAwesomeIcon icon={faSignIn} size={25} style={styles.icon} />
          <Text style={styles.text}>Đăng nhập</Text>
        </Pressable>
      </ScrollView>
    </Animated.View>
  );
}

export default NavbarLeft;

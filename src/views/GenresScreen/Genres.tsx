import {
  FlatList,
  Pressable,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Header from "../../components/Header/Header";
import styles from "./Genres.css";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

function Genres({ navigation }) {
  const genres = useMemo(() => {
    return [
      { id: 1, name: "Action" },
      { id: 2, name: "Romance" },
      { id: 3, name: "Drama" },
      { id: 4, name: "Comedy" },
      { id: 5, name: "Slice of Life" },
      { id: 6, name: "Martial Arts" },
      { id: 7, name: "Adventure" },
      { id: 8, name: "Seinen" },
      { id: 9, name: "Manhwa" },
      { id: 10, name: "Historical" },
      { id: 11, name: "Magic" },
      { id: 12, name: "Isekai" },
      { id: 13, name: "Adventure" },
      { id: 14, name: "Ecchi" },
      { id: 15, name: "Manga" },
      { id: 16, name: "Drama" },
      { id: 17, name: "Shounen" },
      { id: 18, name: "Psychological" },
      { id: 19, name: "Sports" },
      { id: 20, name: "Supernatural" },
      { id: 21, name: "Shoujo" },
      { id: 22, name: "Tragedy" },
      { id: 23, name: "Fantasy" },
      { id: 24, name: "School Life" },
    ];
  }, []);
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    >
      <Header>
        <View style={styles.headerDetailManga}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={25} />
          </Pressable>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 18,
              fontWeight: "500",
            }}
          >
            Thể loại
          </Text>
        </View>
      </Header>
      <FlatList
        data={genres}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight
              underlayColor="#d0d3da"
              onPress={() => {
                navigation.navigate("filterManga", {
                  genres: item.name,
                });
              }}
              style={styles.genreItem}
            >
              <Text style={styles.textItem}>{item.name}</Text>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
}

export default Genres;

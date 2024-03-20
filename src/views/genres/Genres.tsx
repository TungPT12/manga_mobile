import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
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

function Genres() {
  const navigation = useNavigation();
  const genres = [
    { id: 1, name: "Hành động" },
    { id: 1, name: "Hành động" },
    { id: 2, name: "Hành động" },
    { id: 3, name: "Hành động" },
  ];
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
              onPress={() => {}}
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

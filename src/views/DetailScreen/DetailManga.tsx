import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faClock,
  faHeart,
  faPlusCircle,
  faTags,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { getChaptersByMangaIdApi } from "../../service/chapter";
import { useSelector } from "react-redux";
import styles from "./DetailManga.css";
import HeaderDetail from "./HeaderDetail";
import CardChapter from "../../components/CardChapter/CardChapter";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
function DetailManga({ navigation, route }) {
  //   const todo = useSelector((state) => state.todos);
  //   console.log(todo);
  const { id, url, title, authors, sub_title, status, genres, summary } =
    route.params;
  const [chapters, setChapters] = useState([]);
  const [activeTabs, setActiveTabs] = useState({
    listChapterTab: true,
    introduceTabs: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [firstNLastChap, setFirstNLastChap] = useState({
    firstChap: "",
    lastChap: "",
  });
  const getChaptersByMangaId = (id: string) => {
    getChaptersByMangaIdApi(id)
      .then((response) => {
        if (response.status != 200) {
          throw new Error(JSON.stringify(response.error));
        }
        return response.data;
      })
      .then((data) => {
        setChapters(data.data);
        setFirstNLastChap({
          firstChap: data.data[0].id,
          lastChap: data.data[data.data.length - 1].id,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderChapters = useCallback((chapters: Chapter[]) => {
    return chapters.map((chapter: Chapter) => {
      return (
        <CardChapter
          key={chapter.id}
          navigation={navigation}
          idChapter={chapter.id}
          chapterNumber={chapter.title}
          name={title}
        />
      );
    });
  }, []);

  useEffect(() => {
    getChaptersByMangaId(id);
  }, []);

  return (
    <View style={styles.detailContainer}>
      <HeaderDetail navigation={navigation} styles={styles} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <View
            style={{
              flex: 1,
            }}
          >
            <ScrollView
              style={{
                height: "100%",
              }}
            >
              <Text style={styles.name}>{title}</Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: url,
                  }}
                />
                <View style={styles.infoManga}>
                  <View style={styles.otherName}>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      size={22}
                      style={styles.icon}
                    />
                    <Text numberOfLines={1} style={styles.text}>
                      {sub_title}
                    </Text>
                  </View>
                  <View style={styles.authors}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      size={22}
                      style={styles.icon}
                    />
                    <Text numberOfLines={1} style={styles.textAuthors}>
                      {authors}
                    </Text>
                  </View>
                  <View style={styles.status}>
                    <FontAwesomeIcon
                      icon={faClock}
                      size={22}
                      style={styles.icon}
                    />
                    <Text numberOfLines={1} style={styles.text}>
                      {status}
                    </Text>
                  </View>
                  <View style={styles.types}>
                    <FontAwesomeIcon
                      icon={faTags}
                      size={22}
                      style={styles.icon}
                    />
                    <Text numberOfLines={1} style={styles.text}>
                      {genres.join(" - ")}
                    </Text>
                  </View>
                  <View style={styles.action}>
                    <Button
                      onPress={
                        firstNLastChap.firstChap
                          ? () => {
                              navigation.navigate("manga", {
                                idChapter: firstNLastChap.firstChap,
                                name: title,
                              });
                            }
                          : () => {}
                      }
                      title="Đọc từ đầu"
                    />

                    <Button
                      onPress={
                        firstNLastChap.lastChap
                          ? () => {
                              navigation.navigate("manga", {
                                idChapter: firstNLastChap.lastChap,
                                name: title,
                              });
                            }
                          : () => {}
                      }
                      title="Đọc mới nhất"
                    />
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.wrapTabs}>
                  <TouchableHighlight
                    underlayColor="#e8e8e8"
                    onPress={() => {
                      setActiveTabs({
                        introduceTabs: false,
                        listChapterTab: true,
                      });
                    }}
                    style={{
                      ...styles.tabs,
                      borderBottomColor: activeTabs.listChapterTab
                        ? "#f4bb28"
                        : "#fff",
                      flex: 2,
                    }}
                  >
                    <Text style={styles.textTabs}>Danh sách chương</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor="#e8e8e8"
                    onPress={() => {
                      setActiveTabs({
                        introduceTabs: true,
                        listChapterTab: false,
                      });
                    }}
                    style={{
                      ...styles.tabs,
                      flex: 1.5,
                      borderBottomColor: activeTabs.introduceTabs
                        ? "#f4bb28"
                        : "#fff",
                    }}
                  >
                    <Text style={styles.textTabs}>Giới thiệu</Text>
                  </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}>
                  {activeTabs.introduceTabs ? (
                    <Text>{summary}</Text>
                  ) : (
                    renderChapters(chapters)
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <FontAwesomeIcon
              icon={faHeart}
              size={22}
              color="#b6b6b6"
              style={{
                elevation: 10,
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

export default DetailManga;

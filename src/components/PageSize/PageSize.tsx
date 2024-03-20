import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, Text, View } from "react-native";
import styles from "./PageSize.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function PageSize({ page, handlePreviousPage, handleNextPage }) {
  return (
    <View style={styles.wrapPageSize}>
      <Pressable onPress={handlePreviousPage} style={styles.preButton}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={styles.angleIcon}
          size={28}
        />
      </Pressable>
      <Text style={styles.textPage}>{page}</Text>
      <Pressable onPress={handleNextPage} style={styles.nextButton}>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={styles.angleIcon}
          size={28}
        />
      </Pressable>
    </View>
  );
}

export default PageSize;

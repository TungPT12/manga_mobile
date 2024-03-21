import { ActivityIndicator, View } from "react-native";
import styles from "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <View style={styles.containerLoadingSpinner}>
      <ActivityIndicator size={60} color={"#0000ff"} />
    </View>
  );
}

export default LoadingSpinner;

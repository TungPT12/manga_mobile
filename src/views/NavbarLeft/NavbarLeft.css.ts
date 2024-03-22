import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapperHeaderLeft: {
    backgroundColor: "#f5f5f5",
    height: "100%",
    width: "80%",
    position: "absolute",
    zIndex: 2,
  },

  headerLeft: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    paddingHorizontal: 10,
  },

  scrollView: {
    paddingTop: 8,
    paddingHorizontal: 8,
  },

  wrapItem: {
    flexDirection: "row",
    marginBottom: 22,
    alignItems: "center",
  },

  icon: {
    color: "#9a9a9a",
  },

  text: {
    color: "#000000",
    fontSize: 16,
    marginLeft: 32,
    textTransform: "capitalize",
  },
});

export default styles;

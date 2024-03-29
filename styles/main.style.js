import { StyleSheet } from "react-native";
import { colors, sizes } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
    backgroundColor: colors.background,
    justifyContent: "flex-end",
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: sizes.keyboard.height,
  },
  currentText: {
    color: "white",
    fontSize: sizes.text.fontSize,
    fontFamily: "Work-Sans",
    textAlign: "right",
    width: "80%",
    textAlign: "right",
  },
  history: {
    width: "80%",
  },
  historyText: {
    color: "gray",
    fontSize: sizes.text.fontSize - 30,
    fontFamily: "Work-Sans",
    textAlign: "right",
    textAlign: "right",
  },
});

export default styles;

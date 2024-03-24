import { StyleSheet } from "react-native";
import { colors, sizes } from "../../constants";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.button.borderRadius,
    height: sizes.button.height,
    marginTop: 15,
    marginHorizontal: 10,
  },
  textButton: {
    fontFamily: "Work-Sans",
    color: colors.text,
    fontSize: sizes.button.fontSize,
  },
});

export default styles;

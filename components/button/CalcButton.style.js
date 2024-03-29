import { StyleSheet } from "react-native";
import { colors, sizes } from "../../constants";

const styles = StyleSheet.create({
  button: {
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizes.button.borderRadius,
    height: sizes.button.height,
    minWidth: sizes.button.width,
    padding: 15,
    marginTop: 20,
    marginHorizontal: 4,
  },
  textButton: {
    fontFamily: "Work-Sans",
    color: colors.text,
    fontSize: sizes.button.fontSize,
  },
});

export default styles;

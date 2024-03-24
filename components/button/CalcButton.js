import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./CalcButton.style";
import { colors } from "../../constants";
import { shape } from "../../constants/keyboardLayout";

const CalcButton = ({ item }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            item.id % shape.colums == 0
              ? colors.highEmphasis
              : item.id < 4
                ? colors.lowEmphasis
                : colors.mediumEmphasis,
        },
      ]}
    >
      {item.icon != "" ? (
        <Image source={item.icon} />
      ) : (
        <Text style={styles.textButton}>{item.text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CalcButton;
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./CalcButton.style";
import { colors } from "../../constants";
import { shape } from "../../constants/keyboardLayout";

const CalcButton = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor:
            item.id % shape.colums == 0
              ? colors.button.highEmphasis
              : item.id < 4
                ? colors.button.mediumEmphasis
                : colors.button.lowEmphasis,
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

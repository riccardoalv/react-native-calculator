import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./CalcButton.style";

const CalcButton = ({ item }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        item.id % 4 == 0
          ? styles.blueButton
          : item.id < 4
            ? styles.whiteGrayButton
            : styles.grayButton,
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

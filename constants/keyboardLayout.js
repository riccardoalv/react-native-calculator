import { ToastAndroid } from "react-native";
import { icons } from "../constants";

const keyboardLayout = [
  { id: 1, text: "C", icon: "", handle: (value) => "" },
  { id: 2, text: "", icon: icons.minus, handle: (value) => "- " + value },
  { id: 3, text: "%", icon: "", handle: (value) => value + " % " },
  { id: 4, text: "÷", icon: "", handle: (value) => value + " ÷ " },
  { id: 5, text: "7", icon: "", handle: (value) => value + "7" },
  { id: 6, text: "8", icon: "", handle: (value) => value + "8" },
  { id: 7, text: "9", icon: "", handle: (value) => value + "9" },
  { id: 8, text: "×", icon: "", handle: (value) => value + " × " },
  { id: 9, text: "4", icon: "", handle: (value) => value + "4" },
  { id: 10, text: "5", icon: "", handle: (value) => value + "5" },
  { id: 11, text: "6", icon: "", handle: (value) => value + "6" },
  { id: 12, text: "-", icon: "", handle: (value) => value + " - " },
  { id: 13, text: "1", icon: "", handle: (value) => value + "1" },
  { id: 14, text: "2", icon: "", handle: (value) => value + "2" },
  { id: 15, text: "3", icon: "", handle: (value) => value + "3" },
  { id: 16, text: "+", icon: "", handle: (value) => value + " + " },
  { id: 17, text: ".", icon: "", handle: (value) => value + "." },
  { id: 18, text: "0", icon: "", handle: (value) => value + "0" },
  {
    id: 19,
    text: "",
    icon: icons.deleteIcon,
    handle: (value) => value.slice(0, -1),
  },
  {
    id: 20,
    text: "=",
    icon: "",
    handle: (value) => {
      const calc = value
        .replace("×", "*")
        .replace("÷", "/")
        .replace("%", "/100 *");
      try {
        return eval(calc).toString();
      } catch (e) {
        ToastAndroid.show("Invalid Expression", ToastAndroid.SHORT);
      }
    },
  },
];

const shape = {
  colums: 4,
  rows: 5,
};

export { keyboardLayout, shape };

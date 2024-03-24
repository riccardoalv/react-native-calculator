import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CalcButton } from "./components";
import { keyboardLayout, shape } from "./constants/keyboardLayout";
import styles from "./styles/main.style";

export default function App() {
  const [current, setCurrent] = useState("123.4+321");
  const [history, setHistory] = useState("123.4+321");
  const [fontsLoaded, fontError] = useFonts({
    "Work-Sans": require("./assets/fonts/Work_Sans/WorkSans-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light-content" />
      <View style={styles.main}>
        <Text numberOfLines={1} style={styles.historyText}>
          {history}
        </Text>
        {/*TODO: make this a horizontal ScrollView and set a min font size*/}
        <Text
          numberOfLines={1}
          style={styles.currentText}
          adjustsFontSizeToFit={true}
        >
          {current}
        </Text>
        <FlatList
          data={keyboardLayout}
          numColumns={shape.colums}
          renderItem={({ item }) => (
            <CalcButton
              item={item}
              onPress={() => {
                setCurrent(item.handle(current));
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.keyboard}
        />
      </View>
    </SafeAreaView>
  );
}

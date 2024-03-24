import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CalcButton } from "./components";
import { keyboardLayout, shape } from "./constants/keyboardLayout";
import { colors, sizes } from "./constants";

export default function App() {
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
      <FlatList
        data={keyboardLayout}
        numColumns={shape.colums}
        renderItem={CalcButton}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.keyboard}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: sizes.keyboard.height,
  },
});

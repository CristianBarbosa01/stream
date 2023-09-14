import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <Routes />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

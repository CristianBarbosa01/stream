import { NavigationContainer } from "@react-navigation/native";
import { Platform, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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

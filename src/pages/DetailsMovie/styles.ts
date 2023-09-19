import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  containerImage: {
    width: "100%",
    backgroundColor: "red",
    height: 400,
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  containerBack : {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 5,
  }
});
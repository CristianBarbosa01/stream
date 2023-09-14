import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 10,
    height: '100%',
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.tint
  },
  carousel: {
    height: '92%',
    paddingBottom: 10,
  }
});
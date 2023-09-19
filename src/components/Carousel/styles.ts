import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    fontSize: 14,
    color: '#fff'
  },
  viewAll: {
     color: theme.tint
  },
});
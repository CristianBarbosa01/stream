import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  rowScrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(15),
  },
  markeeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: RFValue(15),
  },
});

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { IconProps, Props } from "./types";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const BackButton = ({ onClick, ...rest }: Props & IconProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.8}
      style={styles.containerBack}
    >
      <Ionicons name="chevron-back-sharp" size={RFValue(25)} {...rest} />
    </TouchableOpacity>
  );
};

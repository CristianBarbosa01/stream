import { StyleSheet, Image, Dimensions } from "react-native";

import { Props } from "./types";
import React from "react";

const widthFull = Dimensions.get("window").width;
const heightFull = Dimensions.get("window").height;

export const ImageDetail = ({ source, mode, height }: Props) => {
  return (
    <Image
      source={{
        uri: source,
      }}
      width={widthFull}
      height={height || heightFull / 3}
      resizeMode={mode}
    />
  );
};

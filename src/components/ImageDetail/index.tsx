import { StyleSheet, Image, Dimensions } from "react-native";

import { Props } from "./types";

const widthFull = Dimensions.get("window").width;
const heightFull = Dimensions.get("window").height;

export const ImageDetail = ({ source }: Props) => {
  return (
    <Image
      source={{
        uri: source,
      }}
      width={widthFull}
      height={heightFull / 2.5}
      resizeMode="cover"
    />
  );
};

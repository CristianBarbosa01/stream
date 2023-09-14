import { StyleSheet, Image, Dimensions } from "react-native";

import { Props } from "./types";

const widthFull = Dimensions.get("window").width;
const heightFull = Dimensions.get("window").height;

export const ImageDetail = ({ source, mode }: Props) => {
  return (
    <Image
      source={{
        uri: source,
      }}
      width={widthFull}
      height={heightFull / 3}
      resizeMode={mode}
    />
  );
};

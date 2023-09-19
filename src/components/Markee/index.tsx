import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Props } from "./types";
import { styles } from "./styles";

export const Markee = ({ data }: Props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.rowScrollContainer}
      horizontal
      style={{
        backgroundColor: "red",
      }}
    >
      {data
        ? data.map((item, index) => {
            return (
              <View key={index} style={styles.markeeContainer}>
                <Text>{item?.title}</Text>
              </View>
            );
          })
        : null}
    </ScrollView>
  );
};

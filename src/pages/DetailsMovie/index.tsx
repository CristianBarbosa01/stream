import { Dimensions, ScrollView, View } from "react-native";
import { ImageDetail } from "../../components/ImageDetail";
import { styles } from "./styles";
import ViewContainer from "../../components/ViewContainer";
import React from "react";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import { Markee } from "../../components/Markee";

const heightFull = Dimensions.get("window").height;

const DetailsMovie = ({ route }) => {
  const image = route?.params?.source || null;
  const data = [{
    title: "Caption",
    color: "blue"
  },
  {
    title: "Test",
    color: "green"
  },
  {
    title: "Caption",
    color: "blue"
  },
  {
    title: "Caption",
    color: "blue"
  },
  {
    title: "Caption",
    color: "blue"
  },
  {
    title: "Caption",
    color: "blue"
  },
  {
    title: "Caption",
    color: "blue"
  },
  {
    title: "Caption",
    color: "blue"
  },
  {
    title: "Caption",
    color: "blue"
  },
  {
    title: "Caption",
    color: "blue"
  },
]
  const { goBack } = useNavigation();

  return (
    <ViewContainer style={styles.container}>
      <ImageDetail mode="cover" source={image} height={heightFull / 1.9} />
      <View style={styles.containerBack}>
        <BackButton onClick={goBack} color={theme.tabIconDefault} />
      </View>

      <ScrollView>
          <Markee data={data} />
      </ScrollView>
    </ViewContainer>
  );
};

export default DetailsMovie;

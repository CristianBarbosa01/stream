import { View } from "react-native";
import { ImageDetail } from "../../components/ImageDetail";
import { styles } from "./styles";
import ViewContainer from "../../components/ViewContainer";

const DetailsMovie = ({route}) => {
  const image = route?.params?.source || null;

  return (
    <ViewContainer style={styles.container}>
      <ImageDetail mode="cover" source={image} />

      <View></View>
    </ViewContainer>
  )
}

export default DetailsMovie;
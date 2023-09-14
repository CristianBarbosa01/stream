import { View } from "react-native";
import { ImageDetail } from "../../components/ImageDetail";
import { styles } from "./styles";

const DetailsMovie = () => {
  return (
    <View style={styles.container}>
    <ImageDetail source="https://i.pinimg.com/originals/4b/56/7b/4b567b59155bf6fdb9984b0a5a0c53c9.jpg" />

    <View></View>
  </View>
  )
}

export default DetailsMovie;
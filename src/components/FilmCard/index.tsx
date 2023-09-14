import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { FilmCardProps } from "./types";

const FilmCard = ({ source }: FilmCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          width={150}
          height={200}
          source={{ uri: source }}
          resizeMode="cover"
        />
        <Text style={styles.title}>Missão impossivel</Text>
      </View>
    </View>
  )
}

export default FilmCard;
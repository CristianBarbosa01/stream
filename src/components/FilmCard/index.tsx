import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const FilmCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} width={150} height={200} source={{ uri: 'https://cinepop.com.br/wp-content/uploads/2023/05/missaoimpossivel7_2.jpg' }}
          resizeMode="cover"
        />
        <Text style={styles.title}>Missão impossivel</Text>
      </View>
    </View>
  )
}

export default FilmCard;
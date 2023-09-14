import { Text, View } from "react-native";
import { styles } from "./styles";
import FilmCard from "../FilmCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Carousel = () => {
  const arrayFilm = [
    { image: 'https://cinepop.com.br/wp-content/uploads/2023/05/missaoimpossivel7_2.jpg' },
    { image: 'https://cinepop.com.br/wp-content/uploads/2023/05/missaoimpossivel7_2.jpg' },
    { image: 'https://cinepop.com.br/wp-content/uploads/2023/05/missaoimpossivel7_2.jpg' },
  ]

  const { navigate }: any = useNavigation()
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>NEW MOVIES</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          arrayFilm.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('DetailsMovie', { source: item.image })}
                key={index}
              >
                <FilmCard source={item.image} />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Carousel;
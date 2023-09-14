import { Text, View } from "react-native";
import { styles } from "./styles";
import FilmCard from "../FilmCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Carousel = () => {
  const arrayFilm = [1, 2, 3]
  const { navigate }: any = useNavigation()
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>NEW MOVIES</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          arrayFilm.map((item) => {
            return (
              <TouchableOpacity onPress={() => navigate('DetailsMovie')} key={item}>
                <FilmCard />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Carousel;
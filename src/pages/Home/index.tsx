import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Carousel from "../../components/Carousel";

const carousel = [1, 2, 3];

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Movies</Text>
      </View>
      <View style={styles.carousel}>
        <ScrollView>
          {
            carousel.map((item) => {
              return (
                <View key={item}>
                  <Carousel />
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default Home;
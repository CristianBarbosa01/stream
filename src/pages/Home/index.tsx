import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Carousel from "../../components/Carousel";
import Highlights from "../../components/Highlights";

const carousel = [1, 2, 3];

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Highlights />
        <View>
          <Text style={styles.title}>Movies</Text>
        </View>
        <View style={styles.carousel}>
          {
            carousel.map((item) => {
              return (
                <View key={item}>
                  <Carousel />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;
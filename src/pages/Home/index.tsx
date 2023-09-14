import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Carousel from "../../components/Carousel";
import Highlights from "../../components/Highlights";
import ViewContainer from "../../components/ViewContainer";

const carousel = [1, 2, 3];

const Home = () => {
  return (
    <ViewContainer style={styles.container}>
      <ScrollView>
        <Highlights />
        <View>
          <Text style={styles.title}>Movies</Text>
        </View>
        <View>
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
    </ViewContainer>
  )
}

export default Home;
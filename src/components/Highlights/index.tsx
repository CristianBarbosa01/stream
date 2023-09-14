import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ImageDetail } from "../ImageDetail";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Highlights = () => {
  const { navigate }: any = useNavigation()

  const banners = [
    { image: "https://media.discordapp.net/attachments/1017766043936116756/1151939612147716106/2Q.png" },
    { image: "https://media.discordapp.net/attachments/1017766043936116756/1151940066587975831/998470.png?width=1125&height=634" }
  ]

  return (
    <Carousel
      loop
      width={width}
      height={height / 3}
      autoPlay={true}
      data={banners}
      scrollAnimationDuration={3000}
      renderItem={({ item }: any) => (
        <TouchableOpacity
          onPress={() => navigate('DetailsMovie', { source: item.image })}
        >
          <ImageDetail source={item.image} mode={'contain'} />
        </TouchableOpacity>
      )}
    />
  )
}

export default Highlights;
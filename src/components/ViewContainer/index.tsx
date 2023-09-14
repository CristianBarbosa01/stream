import { View } from "react-native";
import theme from "../../theme";

const ViewContainer = ({ style = null, children }) => {
  return (
    <View style={[
      style && style,
      { backgroundColor: theme.background, height: '100%', }
    ]}>
      {children}
    </View>
  )
}

export default ViewContainer;
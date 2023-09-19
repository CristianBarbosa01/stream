import { View } from "react-native";
import theme from "../../theme";
import React from "react";

const ViewContainer = ({ style = null, children }) => {
  return (
    <View style={[
      style && style,
      { backgroundColor: theme.background, height: '100%', position: 'relative' }
    ]}>
      {children}
    </View>
  )
}

export default ViewContainer;
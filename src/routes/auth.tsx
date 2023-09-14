import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn">
      <Screen name="SignIn" component={Login} />
    </Navigator>
  )
};
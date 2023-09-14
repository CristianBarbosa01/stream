import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import DetailsMovie from "../pages/DetailsMovie";
import { TabRoutesApp } from "./TabRoutes";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="TabRoutesApp" component={TabRoutesApp} />
      <Screen name="DetailsMovie" component={DetailsMovie} />
    </Navigator>
  );
};

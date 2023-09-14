import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import theme from '../../theme';

const Tab = createBottomTabNavigator();

export const TabRoutesApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        headerShown: false,
      }}

    >
      <Tab.Screen name="Home" options={{
        title: "Home"
      }} component={Home} />
    </Tab.Navigator>
  );
}
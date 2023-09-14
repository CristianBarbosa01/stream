import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import theme from '../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../../pages/Profile';

const Tab = createBottomTabNavigator();

export const TabRoutesApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderColor: theme.background
        }
      }}

    >
      <Tab.Screen name="Home" options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} component={Home} />

      <Tab.Screen name="Profile" options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }} component={Profile} />
    </Tab.Navigator>
  );
}
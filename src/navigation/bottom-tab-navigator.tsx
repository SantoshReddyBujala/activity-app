import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import HomeScreen from "screens/home";
import CompletedScreen from "screens/completed";
import TodayScreen from "screens/today";
import HomeStackNavigator from "./home-stack-navigator";
import CategoryStackNavigator from "./category-stack-navigator";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="CategoriesStack" component={CategoryStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

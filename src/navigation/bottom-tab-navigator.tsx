import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "components/shared/icons";
import CompletedScreen from "screens/completed";
import TodayScreen from "screens/today";
import CategoryStackNavigator from "./category-stack-navigator";
import HomeStackNavigator from "./home-stack-navigator";
import { RootBottomTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <Icons name="home" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={() => ({
          title: "Completed",
          tabBarIcon: ({ color }) => <Icons name="completed" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={() => ({
          title: "Today",
          tabBarIcon: ({ color }) => <Icons name="calender" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="CategoriesStack"
        component={CategoryStackNavigator}
        options={() => ({
          title: "Categories",
          tabBarIcon: ({ color }) => <Icons name="categories" color={color} />,
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

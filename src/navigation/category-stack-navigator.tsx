import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoriesScreen from "screens/categories";
import { CategoriesStackParamList } from "./types";
import CategoryScreen from "screens/category";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNavigator;

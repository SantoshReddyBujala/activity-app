import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoriesScreen from "screens/categories";
import { CategoriesStackParamList } from "./types";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default CategoryStackNavigator;

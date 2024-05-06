import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { CategoriesNavigationType } from "navigation/types";
import React from "react";
import { Pressable } from "react-native";
import { ICategory } from "types";

type CategoryProps = {
  category: ICategory;
};
const Category = ({ category }: CategoryProps) => {
  const navigation = useNavigation<CategoriesNavigationType>();
  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCategory", { category: category });
  };

  const navigateToCategoryScreen = () => {
    navigation.navigate("Category", {
      id: category?._id,
    });
  };
  return (
    <Pressable onPress={navigateToCategoryScreen}>
      <Box bg="gray300" p="4" borderRadius="rounded-5xl">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flexDirection="row">
            <Text variant="textBase" fontWeight="600">
              {category.icon.symbol}
            </Text>
            <Text variant="textBase" fontWeight="600" ml="3">
              {category.name}
            </Text>
          </Box>
          <Pressable onPress={navigateToCreateCategory}>
            <Entypo name="dots-three-vertical" size={20} />
          </Pressable>
        </Box>
      </Box>
    </Pressable>
  );
};

export default Category;

import React from "react";
import { Box, Text } from "components/utils/thems";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoriesNavigationType } from "navigation/types";

const CreateNewList = () => {
  const navigation = useNavigation<CategoriesNavigationType>();
  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCategory", {});
  };
  return (
    <Pressable onPress={navigateToCreateCategory}>
      <Box>
        <Text>CreateNewList</Text>
      </Box>
    </Pressable>
  );
};

export default CreateNewList;

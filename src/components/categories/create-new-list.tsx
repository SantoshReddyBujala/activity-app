import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme, { Box, Text } from "components/utils/thems";
import { CategoriesNavigationType } from "navigation/types";
import React from "react";
import { Pressable } from "react-native";

const CreateNewList = () => {
  const navigation = useNavigation<CategoriesNavigationType>();
  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCategory", {});
  };

  return (
    <Pressable onPress={navigateToCreateCategory}>
      <Box
        p="4"
        backgroundColor="gray300"
        borderRadius="rounded-5xl"
        flexDirection="row"
        mb="10"
        alignItems="center"
      >
        <Feather name="plus" size={24} color={theme.colors.gray500} />
        <Text variant="textXl" fontWeight="600" color="gray650" ml="3">
          Create new list
        </Text>
      </Box>
    </Pressable>
  );
};

export default CreateNewList;

import { Pressable } from "react-native";
import React from "react";
import theme, { Box, Text } from "components/utils/thems";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const NavigateBack = () => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable onPress={navigateBack}>
      <Box bg="gray200" p="2" borderRadius="rounded-7xl">
        <Ionicons name="chevron-back" size={24} color={theme.colors.gray950} />
      </Box>
    </Pressable>
  );
};

export default NavigateBack;

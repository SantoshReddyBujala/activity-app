import React from "react";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import theme, { Box, Text } from "components/utils/thems";
import { Feather } from "@expo/vector-icons";
import NavigateBack from "components/shared/navigate-back";
import { TextInput } from "react-native";

const CreateCategory = () => {
  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box height={16} />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <NavigateBack />
        </Box>
        <Box height={16} />
        <Box bg="gray300" borderRadius="rounded-2xl">
          <TextInput
            style={{
              fontSize: 20,
              lineHeight: 26,
              padding: 16,
            }}
            maxLength={36}
            placeholder="Create new category list"
            placeholderTextColor={theme.colors.gray500}
          />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CreateCategory;

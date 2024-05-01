import NavigateBack from "components/shared/navigate-back";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import theme, { Box } from "components/utils/thems";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { ICategory } from "types";

const CreateCategory = () => {
  const [newCategory, setNewCategory] = useState<
    Omit<ICategory, "_id" | "user" | "isEditable">
  >({
    name:"",
    color: null,
    icon: null
  });
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
            onChangeText={(text)=>{
              setNewCategory(prev =>{
                return{
                  ..prev,
                  name:text
                }
              })
            }}
          />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CreateCategory;

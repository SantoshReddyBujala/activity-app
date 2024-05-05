import Button from "components/shared/button";
import NavigateBack from "components/shared/navigate-back";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import theme, { Box, Text } from "components/utils/thems";
import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { ICategory, ICategoryRequest, IColor, IIcon } from "types";
import { getColors, getIcons } from "utils/helpers";
import useSWRMutation from "swr/mutation";
import axiosInstance, { BASE_URL } from "services/config";
import { useSWRConfig } from "swr";

const COLORS = getColors();
const ICONS = getIcons();
const DEFAULT_COLOR = COLORS[0];
const DEFAULT_ICONS = ICONS[0];

const createCategoryRequest = async (
  url: string,
  { arg }: { arg: ICategoryRequest }
) => {
  try {
    console.log(arg);
    await axiosInstance.post(url, {
      ...arg,
    });
  } catch (error) {
    console.log("Error while create category");
  }
};

const CreateCategory = () => {
  const { mutate } = useSWRConfig();

  const { trigger, isMutating } = useSWRMutation(
    "categories/create",
    createCategoryRequest
  );

  const [newCategory, setNewCategory] = useState<
    Omit<ICategory, "_id" | "user" | "isEditable">
  >({
    name: "",
    color: DEFAULT_COLOR,
    icon: DEFAULT_ICONS,
  });
  const createCategory = async () => {
    //console.log(newCategory);

    console.log(newCategory);
    await mutate(BASE_URL + "categories");

    try {
      trigger({
        ...newCategory,
      });
    } catch (error) {
      console.log("Error while create a category", error);
    }
  };

  const updateColor = (color: IColor) => {
    setNewCategory((prev) => {
      return {
        ...prev,
        color,
      };
    });
  };

  const updateIcon = (icon: IIcon) => {
    setNewCategory((prev) => {
      return {
        ...prev,
        icon,
      };
    });
  };

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
            onChangeText={(text) => {
              setNewCategory((prev) => {
                return {
                  ...prev,
                  name: text,
                };
              });
            }}
          />
        </Box>
        <Box height={16} />
        <Box backgroundColor="gray300" p="4" borderRadius="rounded-2xl">
          <Box
            bg="white"
            p="2"
            width={64}
            mb="4"
            alignItems="center"
            borderRadius="rounded-2xl"
          >
            <Text
              fontWeight="600"
              variant="textSm"
              color={newCategory.color.name as any}
            >
              Color
            </Text>
          </Box>
          <Box flexDirection="row" justifyContent="space-evenly">
            {COLORS.map((_color) => {
              return (
                <Pressable
                  key={_color.id}
                  onPress={() => {
                    updateColor(_color);
                  }}
                >
                  <Box
                    style={{ backgroundColor: _color.code }}
                    width={24}
                    height={24}
                    borderRadius="rounded-2xl"
                  ></Box>
                </Pressable>
              );
            })}
          </Box>
        </Box>

        <Box height={16} />
        <Box backgroundColor="gray300" p="4" borderRadius="rounded-2xl">
          <Box
            bg="white"
            p="2"
            width={60}
            height={40}
            mb="4"
            alignItems="center"
            justifyContent="center"
            borderRadius="rounded-2xl"
          >
            <Text fontWeight="600" variant="textSm">
              {newCategory.icon.symbol}
            </Text>
          </Box>
          <Box flexDirection="row" justifyContent="space-evenly">
            {ICONS.map((_icon) => {
              return (
                <Pressable
                  key={_icon.id}
                  onPress={() => {
                    updateIcon(_icon);
                  }}
                >
                  <Box width={36} height={36} borderRadius="rounded-2xl">
                    <Text>{_icon.symbol}</Text>
                  </Box>
                </Pressable>
              );
            })}
          </Box>
        </Box>

        <Box position="absolute" bottom={40} left={0} right={0}>
          <Button label="Create new category" onPress={createCategory} />
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CreateCategory;

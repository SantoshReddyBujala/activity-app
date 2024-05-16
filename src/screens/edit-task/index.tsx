import NavigateBack from "components/shared/navigate-back";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import theme, { Box, Text } from "components/utils/thems";
import { Pressable, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "navigation/types";
import useSWR, { mutate, useSWRConfig } from "swr";
import Loader from "components/shared/loader";
import useSWRMutation from "swr/dist/mutation";
import { ICategory, ITaskRequest } from "types";
import axiosInstance, { fetcher } from "services/config";
import { format, isToday } from "date-fns";

type EditTaskRouteType = RouteProp<HomeStackParamList, "EditTask">;

const updateTaskRequest = async (
  url: string,
  { arg }: { arg: ITaskRequest }
) => {
  try {
    await axiosInstance.post(url, {
      ...arg,
    });
  } catch (error) {
    console.log("error in update Task", error);
    throw error;
  }
};

const EditTaskScreen = () => {
  const route = useRoute<EditTaskRouteType>();
  const { task } = route.params;
  const [updateTask, setUpdateTask] = useState(task);

  const onUpdateTask = async () => {
    try {
    } catch (error) {
      console.log("error in onUpdateTask", error);
      throw error;
    }
  };

  const { data, trigger } = useSWRMutation("tasks/update", updateTaskRequest);
  const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>(
    false
  );
  const [isSelectingDate, setIsSelectingDate] = useState<boolean>(false);

  const { data: categories, isLoading } = useSWR<ICategory[]>(
    "categories",
    fetcher
  );
  const { mutate } = useSWRConfig();

  if (isLoading || !categories) {
    return <Loader />;
  }

  const selectedCategory = categories?.find(
    (_category) => _category._id === updateTask.categoryId
  );
  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <NavigateBack />
          <Pressable>
            <MaterialCommunityIcons
              name="delete"
              size={26}
              color={theme.colors.rose500}
            />
          </Pressable>
        </Box>
        <Box height={20} />
        <Box
          bg="gray300"
          px="4"
          py="4"
          borderRadius="rounded-5xl"
          flexDirection="row"
          position="relative"
        >
          <TextInput
            placeholder="Create a new task"
            style={{
              paddingVertical: 8,
              paddingHorizontal: 8,
              fontSize: 16,
              width: "50%",
            }}
            maxLength={36}
            textAlignVertical="center"
            value={updateTask.name}
            onChangeText={(text) => {
              setUpdateTask((prev) => {
                return {
                  ...prev,
                  name: text,
                };
              });
            }}
            onSubmitEditing={onUpdateTask}
          />
          <Box flexDirection="row" alignItems="center">
            <Pressable
              onPress={() => {
                setIsSelectingDate((prev) => !prev);
              }}
            >
              <Box
                flexDirection="row"
                alignContent="center"
                bg="white"
                p="2"
                borderRadius="rounded-xl"
              >
                <Text>
                  {isToday(new Date(updateTask.date))
                    ? "Today"
                    : format(new Date(updateTask.date), "MMM dd")}
                </Text>
              </Box>
            </Pressable>
            <Box width={12} />
            <Pressable
              onPress={() => {
                setIsSelectingCategory((prev) => !prev);
              }}
            >
              <Box
                bg="white"
                flexDirection="row"
                alignItems="center"
                p="2"
                borderRadius="rounded-xl"
              >
                <Box
                  width={12}
                  height={12}
                  borderRadius="rounded"
                  borderWidth={2}
                  mr="1"
                  style={{
                    borderColor: selectedCategory?.color.code,
                  }}
                ></Box>
                <Text
                  style={{
                    color: selectedCategory?.color.code,
                  }}
                >
                  {selectedCategory?.name}
                </Text>
              </Box>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default EditTaskScreen;

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Loader from "components/shared/loader";
import NavigateBack from "components/shared/navigate-back";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { today } from "components/tasks/task-actions";
import theme, { Box, Text } from "components/utils/thems";
import { format, isToday } from "date-fns";
import { HomeStackParamList } from "navigation/types";
import { useState } from "react";
import { FlatList, Pressable, TextInput } from "react-native";
import { Calendar } from "react-native-calendars";
import axiosInstance, { fetcher } from "services/config";
import useSWR, { useSWRConfig } from "swr";
import useSWRMutation from "swr/dist/mutation";
import { ICategory, ITask } from "types";

type EditTaskRouteType = RouteProp<HomeStackParamList, "EditTask">;

const updateTaskRequest = async (url: string, { arg }: { arg: ITask }) => {
  try {
    await axiosInstance.put(url + "/" + arg._id, {
      ...arg,
    });
  } catch (error) {}
};

const deleteTaskRequest = async (
  url: string,
  { arg }: { arg: { id: string } }
) => {
  try {
    console.log(arg.id);
    await axiosInstance.delete(url + "/" + arg.id);
  } catch (error) {}
};

const EditTaskScreen = () => {
  const { mutate } = useSWRConfig();
  const route = useRoute<EditTaskRouteType>();
  const { task } = route.params;
  const [updateTask, setUpdateTask] = useState(task);
  const navigation = useNavigation();

  const { trigger } = useSWRMutation("tasks/edit", updateTaskRequest);
  const { trigger: triggerDelete } = useSWRMutation("tasks", deleteTaskRequest);
  const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>(
    false
  );

  const [isSelectingDate, setIsSelectingDate] = useState<boolean>(false);
  const { data: categories, isLoading } = useSWR<ICategory[]>(
    "categories",
    fetcher
  );

  const deleteTask = async () => {
    try {
      await triggerDelete({
        id: task._id,
      });
      await mutate("tasks/");
      navigation.goBack();
    } catch (error) {
      console.log("error in deleteTask", error);
      throw error;
    }
  };
  const onUpdateTask = async () => {
    try {
      if (updateTask.name.length.toString().trim().length > 0) {
        await trigger({ ...updateTask });
        await mutate("tasks/");
        navigation.goBack();
      }
    } catch (error) {
      console.log("error in updateTask", error);
      throw error;
    }
  };

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
          <Pressable onPress={deleteTask}>
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
        {isSelectingCategory && (
          <Box alignItems="flex-end" my="4" justifyContent="flex-end">
            <FlatList
              data={categories}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    onPress={() => {
                      setUpdateTask((prev) => {
                        return {
                          ...prev,
                          categoryId: item._id,
                        };
                      });
                      setIsSelectingCategory(false);
                    }}
                  >
                    <Box
                      bg="gray300"
                      p="2"
                      borderTopStartRadius={
                        index === 0 ? "rounded-3xl" : "none"
                      }
                      borderTopEndRadius={index === 0 ? "rounded-3xl" : "none"}
                      borderBottomStartRadius={
                        categories?.length - 1 === index
                          ? "rounded-2xl"
                          : "none"
                      }
                      borderBottomEndRadius={
                        categories?.length - 1 === index
                          ? "rounded-2xl"
                          : "none"
                      }
                    >
                      <Box flexDirection="row">
                        <Text>{item.icon.symbol}</Text>
                        <Text
                          ml="2"
                          fontWeight={
                            updateTask.categoryId === item._id ? "700" : "400"
                          }
                        >
                          {item.name}
                        </Text>
                      </Box>
                    </Box>
                  </Pressable>
                );
              }}
            />
          </Box>
        )}
        {isSelectingDate && (
          <Box>
            <Calendar
              minDate={format(today, "Y-MM-dd")}
              onDayPress={(day) => {
                setIsSelectingDate(false);
                const selectedDate = new Date(day.dateString).toISOString();
                setUpdateTask((prev) => {
                  return {
                    ...prev,
                    date: selectedDate,
                  };
                });
              }}
            />
          </Box>
        )}
      </Box>
    </SafeAreaWrapper>
  );
};

export default EditTaskScreen;

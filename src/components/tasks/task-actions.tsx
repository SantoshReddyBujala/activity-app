import Loader from "components/shared/loader";
import { Box, Text } from "components/utils/thems";
import { format, isToday, parseISO } from "date-fns";
import React, { useState } from "react";
import { FlatList, Pressable, TextInput } from "react-native";
import { Calendar } from "react-native-calendars";
import axiosInstance, { fetcher } from "services/config";
import useSWR, { useSWRConfig } from "swr";
import useSWRMutation from "swr/dist/mutation";
import { ICategory, ITaskRequest } from "types";

type TaskActionsProp = {
  categoryId: string;
};

export const today = new Date();

export const todaysISODate = new Date();
todaysISODate.setHours(0, 0, 0, 0);

const createTaskRequest = async (
  url: string,
  { arg }: { arg: ITaskRequest }
) => {
  try {
    await axiosInstance.post(url, {
      ...arg,
    });
  } catch (error) {
    console.log("error in createTaskRequest", error);
    throw error;
  }
};

const TaskActions = ({ categoryId }: TaskActionsProp) => {
  const [newTask, setNewTask] = useState<ITaskRequest>({
    categoryId: categoryId,
    date: todaysISODate.toISOString(),
    isCompleted: false,
    name: "",
  });
  const { data, trigger } = useSWRMutation("tasks/create", createTaskRequest);
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
    (_category) => _category._id === newTask.categoryId
  );

  const onCreateTask = async () => {
    try {
      if (newTask.name.length.toString().trim().length > 0) {
        /**
         * mutation
         */
        await trigger({
          ...newTask,
        });
        setNewTask({
          categoryId: newTask.categoryId,
          isCompleted: false,
          date: todaysISODate.toISOString(),
          name: "",
        });
        await mutate("tasks/");
      }
    } catch (error) {
      console.log("error in onCreateTask", error);
      throw error;
    }
  };

  return (
    <Box>
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
          value={newTask.name}
          onChangeText={(text) => {
            setNewTask((prev) => {
              return {
                ...prev,
                name: text,
              };
            });
          }}
          onSubmitEditing={onCreateTask}
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
                {isToday(new Date(newTask.date))
                  ? "Today"
                  : format(new Date(newTask.date), "MMM dd")}
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
                    setNewTask((prev) => {
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
                    borderTopStartRadius={index === 0 ? "rounded-3xl" : "none"}
                    borderTopEndRadius={index === 0 ? "rounded-3xl" : "none"}
                    borderBottomStartRadius={
                      categories?.length - 1 === index ? "rounded-2xl" : "none"
                    }
                    borderBottomEndRadius={
                      categories?.length - 1 === index ? "rounded-2xl" : "none"
                    }
                  >
                    <Box flexDirection="row">
                      <Text>{item.icon.symbol}</Text>
                      <Text
                        ml="2"
                        fontWeight={
                          newTask.categoryId === item._id ? "700" : "400"
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
            minDate={format(today, "y-MM-dd")}
            onDayPress={(day) => {
              setIsSelectingDate(false);
              const date = parseISO(day.dateString);
              const selectedDate = new Date(date).toISOString();

              setNewTask((prev) => {
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
  );
};

export default TaskActions;

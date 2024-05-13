import Loader from "components/shared/loader";
import { Box, Text } from "components/utils/thems";
import { format, isToday } from "date-fns";
import React, { useState } from "react";
import { FlatList, Pressable, TextInput } from "react-native";
import { fetcher } from "services/config";
import useSWR from "swr";
import { ICategory, ITask, ITaskRequest } from "types";
import { colors } from "../utils/thems/color";

type TaskActionsProp = {
  categoryId: string;
};

const todaysISODate = new Date().toISOString();

const TaskActions = ({ categoryId }: TaskActionsProp) => {
  const [newTask, setNewTask] = useState<ITaskRequest>({
    categoryId: categoryId,
    date: todaysISODate,
    isCompleted: false,
    name: "",
  });

  const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>(
    false
  );

  const { data: categories, isLoading } = useSWR<ICategory[]>(
    "categories",
    fetcher
  );

  if (isLoading || !categories) {
    return <Loader />;
  }

  const selectedCategory = categories?.find(
    (_category) => _category._id === categoryId
  );
  return (
    <Box
      bg="gray300"
      //px="4"
      py="4"
      borderRadius="rounded-5xl"
      flexDirection="row"
      position="relative"
    >
      <TextInput
        placeholder="Create a new task"
        style={{
          paddingVertical: 6,
          paddingHorizontal: 6,
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
      />
      <Box flexDirection="row" alignItems="center">
        <Pressable>
          <Box
            flexDirection="row"
            alignItems="center"
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
      </Box>
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
            height={12}
            width={12}
            borderRadius="rounded"
            borderWidth={2}
            mr="1"
            style={{
              borderColor: selectedCategory?.color?.code,
            }}
          ></Box>
          <Text style={{ color: selectedCategory?.color?.code }}>
            {selectedCategory?.name}
          </Text>
        </Box>
      </Pressable>
      {selectedCategory && (
        <Box position="absolute" right={40} bottom={-130}>
          <FlatList
            data={categories}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  onPress={() => {
                    setNewTask((prev) => {
                      return { ...prev, categoryId: item?._id };
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
                      <Text>{item?.icon?.symbol}</Text>
                      <Text
                        ml="2"
                        fontWeight={
                          newTask?.categoryId === item?._id ? "700" : "400"
                        }
                      >
                        {item?.name}
                      </Text>
                    </Box>
                  </Box>
                </Pressable>
              );
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default TaskActions;

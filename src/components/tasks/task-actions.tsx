import Loader from "components/shared/loader";
import { Box, Text } from "components/utils/thems";
import { format, isToday } from "date-fns";
import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
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

  const [isSelectingCategory, setIsSelectingCategory] = useState<boolean>();

  const { data: categories, isLoading } = useSWR<ICategory[]>(
    "categories",
    fetcher
  );

  if (isLoading) {
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
      <Pressable>
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
    </Box>
  );
};

export default TaskActions;

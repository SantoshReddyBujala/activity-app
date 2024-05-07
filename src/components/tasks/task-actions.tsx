import { Box, Text } from "components/utils/thems";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { ITask, ITaskRequest } from "types";

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
  return (
    <Box bg="gray300" px="4" py="4" borderRadius="rounded-5xl">
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
    </Box>
  );
};

export default TaskActions;

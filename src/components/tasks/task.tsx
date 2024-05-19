import React from "react";
import { Box, Text } from "components/utils/thems";
import { ITask } from "types";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import useSWRMutation from "swr/dist/mutation";
import axiosInstance from "services/config";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationType } from "navigation/types";

type TaskProps = {
  task: ITask;
  mutateTasks: () => Promise<ITask[] | undefined>;
};
interface ITaskStatusRequest {
  id: string;
  isComplted: boolean;
}
const toggleTaskStatusRequest = async (
  url: string,
  { arg }: { arg: ITaskStatusRequest }
) => {
  try {
    await axiosInstance.put(url + "/" + arg.id, {
      ...arg,
    });
  } catch (error) {
    console.log("Error While Update Tasks", error);
    throw error;
  }
};
const Task = ({ task, mutateTasks }: TaskProps) => {
  const { trigger } = useSWRMutation("tasks/update", toggleTaskStatusRequest);

  const navigation = useNavigation<HomeScreenNavigationType>();

  const toggleTaskStatus = async () => {
    try {
      const _updatedTask = {
        id: task._id,
        isCompleted: !task.isCompleted,
      };
      await trigger(_updatedTask);
      mutateTasks();
    } catch (error) {
      console.log("Error while toggle task", error);
      throw error;
    }
  };
  const navigateToEditTask = () => {
    navigation.navigate("EditTask", { task });
  };
  return (
    <Pressable onPress={toggleTaskStatus} onLongPress={navigateToEditTask}>
      <Box p="4" bg="gray300" borderRadius="rounded-5xl" flexDirection="row">
        <Box flexDirection="row" alignItems="center">
          <Box
            height={26}
            width={26}
            bg={task.isCompleted ? "primary" : "gray400"}
            borderRadius="rounded-xl"
            alignItems="center"
            justifyContent="center"
          >
            <Ionicons name="checkmark"></Ionicons>
          </Box>
          <Text ml="3" variant="textBase">
            {task?.name}
          </Text>
        </Box>
        <Box></Box>
      </Box>
    </Pressable>
  );
};

export default Task;

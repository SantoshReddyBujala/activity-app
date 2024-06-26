import Loader from "components/shared/loader";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import Task from "components/tasks/task";
import { Box, Text } from "components/utils/thems";
import { FlatList } from "react-native";
import { fetcher } from "services/config";
import useSWR from "swr";
import { ITask } from "types";

const CompletedScreen = () => {
  const {
    data: tasks,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR<ITask[]>(`tasks/completed`, fetcher, {
    refreshInterval: 1000,
  });

  if (isLoadingTasks || !tasks) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="textXl" fontWeight="700" ml="3">
            Completed
          </Text>
        </Box>
        <Box height={16} />

        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <Task task={item} mutateTasks={mutateTasks} />;
          }}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default CompletedScreen;

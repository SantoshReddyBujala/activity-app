import Loader from "components/shared/loader";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import Task from "components/tasks/task";
import TaskActions from "components/tasks/task-actions";
import { AnimatedText, Box, Text } from "components/utils/thems";
import { format } from "date-fns";
import { FlatList } from "react-native";
import { fetcher } from "services/config";
import useUserGlobalStore from "store/useUserGlobalStore";
import useSWR from "swr";
import { ITask } from "types";
import { getGreeting } from "utils/helpers";

const today = new Date();

const greeting = getGreeting({ hour: new Date().getHours() });

const HomeScreen = () => {
  const { user } = useUserGlobalStore();

  const { data: tasks, isLoading, mutate: mutateTasks } = useSWR<ITask[]>(
    "tasks/",
    fetcher
  );

  if (isLoading || !tasks) {
    return <Loader />;
  }
  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <AnimatedText variant="textXl" fontWeight="500">
          Good {greeting} {user?.name}
        </AnimatedText>
        <Text variant="textXl" fontWeight="500">
          It’s {format(today, "eeee, LLL dd")} - {tasks.length} tasks
        </Text>
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} mutateTasks={mutateTasks} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

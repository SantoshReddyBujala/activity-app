import { RouteProp, useRoute } from "@react-navigation/native";
import Loader from "components/shared/loader";
import NavigateBack from "components/shared/navigate-back";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { Box, Text } from "components/utils/thems";
import { CategoriesStackParamList } from "navigation/types";
import { fetcher } from "services/config";
import useSWR from "swr";
import { ICategory, ITask } from "types";
import React from "react";

type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">;

const CategoryScreen = () => {
  const route = useRoute<CategoryScreenRouteProp>();

  const { id } = route.params;

  const { data: category, isLoading: isLoadingCategory } = useSWR<ICategory>(
    `categories/${id}`,
    fetcher
  );

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    mutate: mutateTasks,
  } = useSWR<ITask[]>(`tasks/tasks-by-categories/${id}`, fetcher, {
    refreshInterval: 1000,
  });

  if (isLoadingTasks || isLoadingCategory || !category || !tasks) {
    return <Loader />;
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box width={40}>
          <NavigateBack />
        </Box>
        <Box height={16} />
        <Box flexDirection="row">
          <Text variant="textXl" fontWeight="700">
            {category?.icon?.symbol}
          </Text>
          <Text
            variant="textXl"
            fontWeight="700"
            ml="3"
            style={{
              color: category?.color?.code,
            }}
          >
            {category?.name}
          </Text>
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
};

export default CategoryScreen;

import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { Box, Text } from "components/utils/thems";
import { fetcher } from "services/config";
import useSWR from "swr";

const HomeScreen = () => {
  const { data, isLoading } = useSWR("categories", fetcher);
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Home Screen</Text>
      </Box>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

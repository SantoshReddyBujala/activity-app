import { StyleSheet } from "react-native";
import { Box, Text } from "./utils/thems";

const Button = () => {
  return (
    <Box bg="primary" p="4" borderRadius="rounded-3xl">
      <Text color="whilte">Button Component Test</Text>
    </Box>
  );
};

export default Button;

const styles = StyleSheet.create({
  textColor: {
    color: "green",
  },
});

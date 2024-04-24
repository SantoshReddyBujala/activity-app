import { Pressable } from "react-native";
import { Box, Text } from "../utils/thems";

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongpress?: () => void;
  disabled?: boolean;
};
const Button = ({ label, onLongpress, onPress, disabled }: ButtonProps) => {
  return (
    <Pressable>
      <Box
        bg={disabled ? "gray800" : "primary"}
        py="4"
        borderRadius="rounded-7xl"
      >
        <Text
          variant="textLg"
          fontWeight="500"
          color="white"
          textAlign="center"
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;

import { Pressable } from "react-native";
import { Box, Text } from "../utils/thems";

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongpress?: () => void;
  disabled?: boolean;
  uppercase?: boolean;
};
const Button = ({
  label,
  onLongpress,
  onPress,
  disabled,
  uppercase,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongpress} disabled={disabled}>
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
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;

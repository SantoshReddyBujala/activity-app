import theme, { Box, Text } from "components/utils/thems";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { palette } from "../utils/thems/color";
type InputProps = {
  label: string;
  error?: undefined;
  placeholder: string;
} & TextInputProps;
const Input = ({ label, placeholder }: InputProps) => {
  return (
    <Box flexDirection="column" mb="6">
      <Text variant="textSm" textTransform="uppercase" mb="3">
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={{
          borderColor: palette.gray700,
          borderWidth: 1,
          paddingVertical: 16,
          borderRadius: theme.spacing[7],
          paddingHorizontal: 16,
        }}
      />
    </Box>
  );
};

export default Input;

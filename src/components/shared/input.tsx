import theme, { Box, Text } from "components/utils/thems";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { palette } from "../utils/thems/color";
import { FieldError } from "react-hook-form";
type InputProps = {
  label: string;
  error?: FieldError | undefined;
  placeholder: string;
} & TextInputProps;
const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Box flexDirection="column" mb="6">
      <Text variant="textSm" textTransform="uppercase" mb="3">
        {label}
      </Text>
      <TextInput
        style={{
          borderColor: error ? theme.colors.rose500 : theme.colors.gray650,
          borderWidth: 1,
          paddingVertical: 16,
          borderRadius: theme.spacing[7],
          paddingHorizontal: 16,
        }}
        {...props}
      />
      {error && (
        <Text mt="3" color="rose500">
          {label} is required
        </Text>
      )}
    </Box>
  );
};

export default Input;

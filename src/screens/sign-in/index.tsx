import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import Input from "components/shared/input";
import Button from "components/shared/button";
import { Pressable } from "react-native";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigationToSingUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4" justifyContent="center">
        <Box mb="6">
          <Text variant="textXl">Welcome Back</Text>
        </Box>
        <Box mb="7">
          <Input label="Email" placeholder="Email" />
          <Input label="Password" placeholder="Password" />
        </Box>
        <Pressable onPress={navigationToSingUpScreen}>
          <Text color="primary" textAlign="right" mb="5">
            Register?
          </Text>
        </Pressable>
        <Button
          onPress={navigationToSingUpScreen}
          label={"Submit"}
          uppercase={true}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;

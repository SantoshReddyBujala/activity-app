import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import Input from "components/shared/input";
import Button from "components/shared/button";
import { Pressable } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigationToSingInScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4" mt="12">
        <Box mb="6">
          <Text variant="textXl">Welcome to Activity Application!</Text>
          <Text variant="textXl">Start your activity...</Text>
        </Box>
        <Box mb="1">
          <Input label="Name" placeholder="Name" />
          <Input label="Email" placeholder="Email" />
          <Input label="Password" placeholder="Password" />
        </Box>
        <Pressable onPress={navigationToSingInScreen}>
          <Text color="primary" textAlign="right" mb="5">
            Log In?
          </Text>
        </Pressable>
        <Button
          onPress={navigationToSingInScreen}
          label={"Register"}
          uppercase={true}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;

import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { Button } from "react-native";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigationToSingInScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4" mt="12">
        <Text variant="textXl">Welcome to Activity Application!</Text>
        <Text variant="textXl">Start your activity...</Text>
        <Button
          title="Navigate to Sign In"
          onPress={navigationToSingInScreen}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;

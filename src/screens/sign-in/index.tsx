import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { Button } from "react-native";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
//Sign UP
const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigationToSingUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign In Screen</Text>
        <Button
          title="Navigate to Sign Up"
          onPress={navigationToSingUpScreen}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;

import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { Button } from "react-native";
import { AuthScreenNavigationType } from "../../navigation/types";
//Sign UP
const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigationToSingUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Sign In Screen</Text>
      <Button
        title="Navigate to Sign Up"
        onPress={navigationToSingUpScreen}
      ></Button>
    </Box>
  );
};

export default SignInScreen;

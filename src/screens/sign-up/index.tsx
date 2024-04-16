import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { Button } from "react-native";
import { AuthScreenNavigationType } from "../../navigation/types";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigationToSingInScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <Box>
      <Text>Sign Up Screen</Text>
      <Button
        title="Navigate to Sign In"
        onPress={navigationToSingInScreen}
      ></Button>
    </Box>
  );
};

export default SignUpScreen;

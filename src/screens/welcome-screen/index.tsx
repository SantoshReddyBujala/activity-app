import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { AuthScreenNavigationType } from "navigation/types";
import { Button } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigationToSingInScreen = () => {
    navigation.navigate("SignIn");
  };

  const navigationToSingUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Text>Welcome Screen</Text>
      <Button
        title="Navigate to Sign In"
        onPress={navigationToSingInScreen}
      ></Button>
      <Text></Text>
      <Button
        title="Navigate to Sign Up"
        onPress={navigationToSingUpScreen}
      ></Button>
    </Box>
  );
};

export default WelcomeScreen;

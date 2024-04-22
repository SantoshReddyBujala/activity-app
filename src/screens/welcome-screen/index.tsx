import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { Box, Text } from "components/utils/thems";
import { LinearGradient } from "expo-linear-gradient";
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
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          "#ffffff",
          "#eeeeee",
          "#cccccc",
          "#aaaaaa",
          "#eeeeee",
          "#ffffff",
        ]}
        style={{ flex: 1 }}
      >
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
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;

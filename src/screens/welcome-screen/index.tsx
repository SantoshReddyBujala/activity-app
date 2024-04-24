import { useNavigation } from "@react-navigation/native";
import Button from "components/shared/button";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import { Box, Text } from "components/utils/thems";
import { colors } from "components/utils/thems/color";
import { LinearGradient } from "expo-linear-gradient";
import { AuthScreenNavigationType } from "navigation/types";
import { Image } from "react-native";
const ACTIVITY_LOGO =
  "https://fastly.picsum.photos/id/565/200/300.jpg?hmac=Ho0T-TCTMRX_uDDGzaLhGzTmukSZdDjpGZJTbL0NY3k";
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
          "#EFF6FF",
          "#D6E8FF",
          "#D6E8FF",
          "#EFF6FF",
          "#ffffff",
          "#eeeeee",
        ]}
        style={{ flex: 1 }}
      >
        <Box flex={1} justifyContent="center">
          <Box alignItems="center">
            <Image
              source={{
                uri: ACTIVITY_LOGO,
                width: 120,
                height: 120,
              }}
            />
          </Box>
          <Text
            textAlign="center"
            style={{ marginTop: 15, color: colors.emerald400 }}
            fontWeight="500"
          >
            ACTIVITY APPLICATION
          </Text>
          <Box mt="3" mx="10">
            <Button
              label="Start your journey"
              onPress={() => console.log("navigationToSingInScreen")}
            ></Button>
          </Box>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;

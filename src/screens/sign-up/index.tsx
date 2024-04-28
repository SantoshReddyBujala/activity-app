import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import Input from "components/shared/input";
import Button from "components/shared/button";
import { Pressable } from "react-native";
import { registerUser } from "services/api";
import { Controller, useForm } from "react-hook-form";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigationToSingInScreen = () => {
    navigation.navigate("SignIn");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: IUser) => {
    try {
      const { name, email, password } = data;
      await registerUser({
        name,
        email,
        password,
      });
      navigationToSingInScreen();
    } catch (error) {
      console.log("Error While Signup Submit", error);
      throw error;
    }
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4" mt="12">
        <Box mb="6">
          <Text variant="textXl">Welcome to Activity Application!</Text>
          <Text variant="textXl">Start your activity...</Text>
        </Box>
        <Box mb="1">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
                error={errors.name}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                error={errors.email}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
                error={errors.password}
                secureTextEntry
              />
            )}
            name="password"
          />
        </Box>
        <Pressable onPress={navigationToSingInScreen}>
          <Text color="primary" textAlign="right" mb="5">
            Log In?
          </Text>
        </Pressable>
        <Button
          onPress={handleSubmit(onSubmit)}
          label={"Register"}
          uppercase={true}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;

import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "components/utils/thems";
import { AuthScreenNavigationType } from "../../navigation/types";
import SafeAreaWrapper from "components/shared/safe-area-wrapper";
import Input from "components/shared/input";
import Button from "components/shared/button";
import { Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { loginUser } from "services/api";
import useUserGlobalStore from "store/useUserGlobalStore";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigationToSingUpScreen = () => {
    navigation.navigate("SignUp");
  };

  const { updateUser } = useUserGlobalStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IUser, "name">>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Omit<IUser, "name">) => {
    try {
      const { email, password } = data;
      const _user = await loginUser({
        email: email.toLowerCase(),
        password,
      });
      updateUser({
        email: _user.email,
        name: _user.name,
        password: "",
      });
    } catch (error) {
      console.log("Error While Signup Submit", error);
      throw error;
    }
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4" justifyContent="center">
        <Box mb="6">
          <Text variant="textXl">Welcome Back</Text>
        </Box>
        <Box mb="7">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
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
        <Pressable onPress={navigationToSingUpScreen}>
          <Text color="primary" textAlign="right" mb="5">
            Register?
          </Text>
        </Pressable>
        <Button
          onPress={handleSubmit(onSubmit)}
          label={"Submit"}
          uppercase={true}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;

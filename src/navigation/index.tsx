import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import useUserGlobalStore from "store/useUserGlobalStore";
import AppStackNavigator from "./app-stack-navigator";
import AuthStackNavigator from "./auth-stack-navigator";
const Navigation = () => {
  const { user } = useUserGlobalStore();

  // useEffect(() => {
  //   updateUser({
  //     email: "santosh@gmail.com",
  //     name: "Santosh",
  //   });
  //   updateUser(null);
  //   return () => {};
  // }, []);

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;

import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootBottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  TodayStack: undefined;
  CompletedStack: undefined;
  CategoriesStack: NavigatorScreenParams<CategoriesStackParamList>;
};

export type CategoriesStackParamList = {
  Categories: undefined;
  Category: { id: string };
  CreateCategory: { id?: string };
};

export type HomeStackParamList = {
  Home: undefined;
  EditTask: undefined;
};

export type AppStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList>;
  Settings: undefined;
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

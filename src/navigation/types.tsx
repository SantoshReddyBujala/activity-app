import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ICategory, ITask } from "types";

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootBottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Today: undefined;
  Completed: undefined;
  CategoriesStack: NavigatorScreenParams<CategoriesStackParamList>;
};

export type CategoriesStackParamList = {
  Categories: undefined;
  Category: { id: string };
  CreateCategory: { category?: ICategory };
};

export type HomeStackParamList = {
  Home: undefined;
  EditTask: { task: ITask };
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

export type AuthScreenNavigationType<
  RouteName extends keyof AuthStackParamList
> = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, RouteName>,
  NativeStackNavigationProp<AppStackParamList, "Root">
>;

export type CategoriesNavigationType = NativeStackNavigationProp<
  CategoriesStackParamList
>;

export type HomeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList
>;

import Button from "@/components/button";
import { ThemeProvider } from "@shopify/restyle";
import theme, { Text } from "components/utils/thems";
import { StatusBar } from "expo-status-bar";
import Navigation from "navigation";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

import { ThemeProvider } from "@shopify/restyle";
import theme from "components/utils/thems";
import { StatusBar } from "expo-status-bar";
import Navigation from "navigation";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useUserGlobalStore from "store/useUserGlobalStore";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
        <StatusBar translucent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

import { createBox, createText, createTheme } from "@shopify/restyle";
import { colors } from "./color";
import { textVariants } from './text-variants';
import { Animated } from "react-native";

const theme = createTheme({
    breakpoints: {},
    colors: colors,
    spacing: {
        "1": 4,
        "2": 8,
        "3": 12,
        "4": 16,
        "5": 20,
        "6": 24,
        "7": 28,
        "10": 40,
        "12": 54,
    },
    borderRadii: {
        "none": 0,
        "rounded": 4,
        "rounded-xl": 8,
        "rounded-2xl": 10,
        "rounded-3xl": 12,
        "rounded-4xl": 16,
        "rounded-5xl": 20,
        "rounded-6xl": 24,
        "rounded-7xl": 28
    },
    textVariants
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();

export const Text = createText<Theme>();

export const AnimatedText = Animated.createAnimatedComponent(Text)
export const AnimatedBox = Animated.createAnimatedComponent(Box)

export default theme;
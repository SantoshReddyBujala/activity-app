import { StyleSheet, Text, View } from "react-native";

const Button = () => {
  return (
    <View>
      <Text style={styles.textColor}>Button Component Test</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  textColor: {
    color: "green",
  },
});

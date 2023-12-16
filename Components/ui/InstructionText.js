import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary1,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "open-sans"
  },
});

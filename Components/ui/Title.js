import { Text, StyleSheet, Platform } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 2 : 0,
    padding: 12,
    maxWidth: "80%",
    minWidth: 300,
  },
});

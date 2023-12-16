import { Text, StyleSheet } from "react-native";




export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
  },
});

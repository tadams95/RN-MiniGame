import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Card({ children }) {
  return <View style={styles.Card}>{children}</View>;
}

const styles = StyleSheet.create({
  Card: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 50,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: Colors.primary3
  },
});

import { View, Text, StyleSheet } from "react-native";

export default function CustomCircleDiagram() {
  return <View style={styles.circle}></View>;
}
const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    borderRadius: 50,
  },
});

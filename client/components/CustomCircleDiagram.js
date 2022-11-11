import { View, Text, StyleSheet } from "react-native";

export default function CustomCircleDiagram() {
  return <View style={styles.circle}></View>;
}
const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    backgroundColor: "green",
    borderRadius: 100,
    marginBottom: 30,
  },
});

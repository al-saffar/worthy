import { Text, StyleSheet } from "react-native";

export default function TotalWorth({ totalAmount }) {
  return (
    <>
      <Text style={{ color: "white" }}>TOTAL WORTH</Text>
      <Text style={styles.totalworth}>{totalAmount} DKK</Text>
    </>
  );
}

const styles = StyleSheet.create({
  totalworth: {
    color: "white",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 30,
    lineHeight: 43,
    textShadowColor: "#FFF",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4,
    textAlign: "center",
  },
});

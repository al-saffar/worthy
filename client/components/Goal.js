import { View, Text, StyleSheet } from "react-native";

export default function Goal() {
  return (
    <View style={styles.frame}>
      <Text style={styles.title2}>Goal</Text>
      <View style={styles.box}>
        <View style={styles.bar}>
          <View style={styles.barstatus}></View>
        </View>
        <View style={styles.goaltexts}>
          <Text style={styles.goaltext}>Deadline: 01-01-2023</Text>
          <Text style={styles.goaltext}>1.000.000 DKK</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  title2: {
    color: "white",
    textTransform: "uppercase",
    paddingBottom: 10,
  },
  box: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 320,
  },
  bar: {
    backgroundColor: "#C4C4C4",
    height: 5,
    width: 300,
    borderRadius: 5,
    marginTop: 3,
  },
  barstatus: {
    backgroundColor: "#52FF6E",
    height: 5,
    width: 200,
    borderRadius: 5,
  },
  goaltexts: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    paddingTop: 7,
  },
  goaltext: {
    color: "black",
  },
});

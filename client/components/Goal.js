import { View, Text } from "react-native";
import styles from "./../styles";

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

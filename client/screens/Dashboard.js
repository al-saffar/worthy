import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./../styles";
import CircleDiagram from "../components/CircleDiagram";
import CategoryList from "../components/CategoryList";

export default function DashBoard({ navigation }) {
  return (
    <View style={styles.background}>
      <LinearGradient colors={["#101010", "#2B2B2B"]}>
        <Text style={styles.title1}>TOTAL WORTH</Text>
        <Text style={styles.totalworth}>778.983 DKK</Text>
        <CircleDiagram />
        <CategoryList navigation={navigation} />
      </LinearGradient>
    </View>
  );
}

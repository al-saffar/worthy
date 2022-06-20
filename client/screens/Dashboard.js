import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

import styles from "./../styles";
import CircleDiagram from "../components/CircleDiagram";
import CategoryList from "../components/CategoryList";
import Goal from "../components/Goal";

export default function DashBoard({ navigation }) {
  const [greeting, setGreeting] = useState("Hey");

  useEffect(() => {
    getGreeting();
  }, []);

  async function getGreeting() {
    try {
      const response = await fetch("http://localhost:8080/greeting", {
        mode: "cors",
      });
      const json = await response.json();
      setGreeting(json.content);
      console.log(json.content);
      console.log(greeting);
    } catch (error) {
      console.error(error);
    }
  }

  return !greeting ? (
    <Text>Not loaded yet.</Text>
  ) : (
    <View style={styles.background}>
      <LinearGradient colors={["#101010", "#2B2B2B"]}>
        <Text style={styles.title1}>{greeting}</Text>
        <Text style={styles.title1}>TOTAL WORTH</Text>
        <Text style={styles.totalworth}>778.983 DKK</Text>
        <CircleDiagram />
        <Goal />
        <CategoryList navigation={navigation} />
      </LinearGradient>
    </View>
  );
}

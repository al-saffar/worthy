import { Text, View } from "react-native";
import { useEffect, useState } from "react";

import { category } from "../category";

import styles from "./../styles";
import CircleDiagram from "../components/CircleDiagram";
import CategoryList from "../components/CategoryList";
import Goal from "../components/Goal";

export default function DashBoard({ navigation }) {
  const [greeting, setGreeting] = useState("Hey");
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    getGreeting();
    calculateTotalAmount(category);
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

  function calculateTotalAmount() {
    let total = category.reduce((total, curr) => total + curr.amount, 0);
    setTotalAmount(total);
  }

  return !greeting ? (
    <Text>Not loaded yet.</Text>
  ) : (
    <View>
      <Text style={styles.title1}>{greeting}</Text>
      <Text style={styles.title1}>TOTAL WORTH</Text>
      <Text style={styles.totalworth}>{totalAmount} DKK</Text>
      <CircleDiagram />
      <Goal />
      <CategoryList navigation={navigation} totalAmount={totalAmount} />
    </View>
  );
}

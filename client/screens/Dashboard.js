import { Text, View } from "react-native";
import { useEffect, useState } from "react";

import { category } from "../category";

import CircleDiagram from "../components/CircleDiagram";
import CategoryList from "../components/CategoryList";
import Goal from "../components/Goal";

export default function DashBoard() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    getGreeting();
    //calculateTotalAmount(category);
  }, []);

  async function getGreeting() {
    try {
      const response = await fetch("http://localhost:8080/greeting", {
        mode: "cors",
      });
      const json = await response.json();
      setGreeting(json.content);
      console.warn(json.content);
      console.warn(greeting);
    } catch (error) {
      console.error(error);
    }
  }

  return greeting ? (
    <>
      <Text>Dashboard</Text>
      <Text>{greeting}</Text>
    </>
  ) : (
    <View>
      <Text>Dashboard</Text>
      <Text>Not ready</Text>
    </View>
  );
}

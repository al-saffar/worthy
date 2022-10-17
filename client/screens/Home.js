import { ScrollView, Text, View, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { category } from "../category";

import Goal from "../components/Goal";
import CategoryList from "../components/CategoryList";
import CustomCircleDiagram from "../components/CustomCircleDiagram";
import ScreenTemplate from "../components/ScreenTemplate";
import TotalWorth from "../components/TotalWorth";

export default function Home() {
  const [totalAmount, setTotalAmount] = useState();
  const navigation = useNavigation();
  const [greeting, setGreeting] = useState("");

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
      console.warn(json.content);
      console.warn(greeting);
    } catch (error) {
      console.error(error);
    }
  }

  function goBack() {
    navigation.navigate("Login");
  }

  function calculateTotalAmount() {
    let total = category.reduce((total, curr) => total + curr.amount, 0);
    setTotalAmount(total);
  }

  return (
    <ScrollView>
      <ScreenTemplate>
        <View style={styles.root}>
          <Text style={{ color: "white" }}>Homescreen</Text>
          <Text style={{ color: "white" }}>
            Greeting to, {greeting ? greeting : "ingen"}
          </Text>
          <TotalWorth totalAmount={totalAmount} />
          <Goal />
          <CustomCircleDiagram />
          <CategoryList navigation={navigation} totalAmount={totalAmount} />
          <CustomButton
            onPress={goBack}
            text="GO BACK"
            type="PRIMARY"
          ></CustomButton>
        </View>
      </ScreenTemplate>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

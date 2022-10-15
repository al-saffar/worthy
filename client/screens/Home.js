import { ScrollView, Text, View, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { category } from "../category";

import Goal from "../components/Goal";
import CategoryList from "../components/CategoryList";
import CustomCircleDiagram from "../components/CustomCircleDiagram";

export default function Home() {
  const [totalAmount, setTotalAmount] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    calculateTotalAmount(category);
  }, []);

  function goBack() {
    navigation.navigate("Login");
  }

  function calculateTotalAmount() {
    let total = category.reduce((total, curr) => total + curr.amount, 0);
    setTotalAmount(total);
  }

  return (
    <ScrollView>
      <View>
        <Text>Homescreen</Text>
        <Text>Greeting to, </Text>
        <Text>TOTAL WORTH</Text>
        <Text style={styles.totalworth}>{totalAmount} DKK</Text>
        <Goal />
        <CustomCircleDiagram />
        <CategoryList navigation={navigation} totalAmount={totalAmount} />

        <CustomButton
          onPress={goBack}
          text="GO BACK"
          type="PRIMARY"
        ></CustomButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  totalworth: {
    color: "white",
    height: 54,
    top: 37,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 30,
    lineHeight: 43,
    //text-shadow: 0px 4px 4px #000000
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textAlign: "center",
  },
});

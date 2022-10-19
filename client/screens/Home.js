import { ScrollView, Text, View, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import Goal from "../components/Goal";
import CategoryList from "../components/CategoryList";
import CustomCircleDiagram from "../components/CustomCircleDiagram";
import ScreenTemplate from "../components/ScreenTemplate";
import TotalWorth from "../components/TotalWorth";

export default function Home() {
  const [totalAmount, setTotalAmount] = useState();
  const navigation = useNavigation();
  const [greeting, setGreeting] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCategories();
    console.log("jjnef", categories);
    calculateTotalAmount();
  }, []);

  async function getCategories() {
    try {
      let response = await fetch(
        "https://raw.githubusercontent.com/anitamalina/data/main/worthy/CATEGORY.json"
      );
      let jsonData = await response.json();
      setCategories(jsonData);
      setLoading(false);
      console.log("json", jsonData);
    } catch (error) {
      console.error(error);
    }
  }

  function goBack() {
    navigation.navigate("Login");
  }

  function calculateTotalAmount() {
    if (!isLoading) {
      console.log("cat", categories);
      /*       categories.map(() => {
        let total = reduce((total, curr) => total + curr.amount, 0);
        setTotalAmount(total);
      }); */
    }
  }

  return (
    <ScrollView>
      <ScreenTemplate>
        <View style={styles.root}>
          {isLoading ? (
            <Text>Loading ..</Text>
          ) : (
            <>
              <Text style={{ color: "white" }}>Homescreen</Text>
              <Text style={{ color: "white" }}>
                Hey {greeting ? greeting : "missing data"}
              </Text>
              {isLoading ? (
                <Text>Loading..</Text>
              ) : (
                <TotalWorth totalAmount={totalAmount} />
              )}
              <Goal />
              <CustomCircleDiagram />
              <CategoryList categories={categories} totalAmount={totalAmount} />
              <CustomButton
                onPress={goBack}
                text="GO BACK"
                type="PRIMARY"
              ></CustomButton>
            </>
          )}
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

/*   async function getCategories1() {
    fetch(
      "https://raw.githubusercontent.com/anitamalina/data/main/worthy/CATEGORY.json"
    )
      .then((response) => response.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false), console.log("effew", categories));
  } */

/*   async function getGreeting() {
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
  } */

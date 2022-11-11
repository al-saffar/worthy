import { ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import ScreenTemplate from "../components/ScreenTemplate";
import CategoryList from "../components/CategoryList";
import Goal from "../components/Goal";
import TotalWorth from "../components/TotalWorth";
export default function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getCategories();
    setIsLoading(false);
  }, []);

  /* calculateTotalAmount() needs the amounts from getCategories and can't calculate it before the data is there. */
  useEffect(() => {
    calculateTotalAmount();
  }, [categories]);

  async function getCategories() {
    try {
      let response = await fetch(
        "https://raw.githubusercontent.com/anitamalina/data/main/worthy/CATEGORY.json"
      );
      let jsonData = await response.json();
      setCategories(jsonData);
      setIsLoading(false);
      /* console.log("jsonData", jsonData); */
    } catch (error) {
      console.error(error);
    }
  }

  function goBack() {
    navigation.navigate("Login");
  }

  function calculateTotalAmount() {
    categories.map(() => {
      let total = categories.reduce((total, curr) => total + curr.amount, 0);
      setTotalAmount(total);
    });
  }

  return (
    <ScreenTemplate>
      <View style={styles.root}>
        {isLoading ? (
          <Text>Loading ..</Text>
        ) : (
          <>
            <TotalWorth totalAmount={totalAmount} />

            {/* PIE CHART */}

            <Goal />
            <CategoryList totalAmount={totalAmount} categories={categories} />
            <CustomButton
              onPress={goBack}
              text="GO BACK"
              type="PRIMARY"
            ></CustomButton>
          </>
        )}
      </View>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});

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
  const [portfolio, setPortfolio] = useState();
  const [userId, setUserId] = useState();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getUserData();
    setIsLoading(false);
  }, []);

  /* calculateTotalAmount() needs the amounts from getPortfolio and can't calculate it before the data is there. */
  useEffect(() => {
    //calculateTotalAmount();
  }, [portfolio]);

  async function getUserData() {
    try {
      let response = await fetch(
        //"https://raw.githubusercontent.com/anitamalina/data/main/worthy/CATEGORY.json"
        "http://192.168.0.114:8080/user/me"
      );
      let jsonData = await response.json();
      setUserId(jsonData.id);
      console.log("jjdata id: ", jsonData.id);
      getPortfolio();
      setIsLoading(false);
      console.log("jsonData", jsonData);
    } catch (error) {
      console.error(error);
    }
  }

  //RIGHT HERE: Need to get portfolio data with id 52..
  async function getPortfolio() {
    //console.log("portfolio id", userId);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "52",
      }),
    };
    try {
      //console.log("requestion", requestOptions);
      const response = await fetch(
        "http://192.168.0.114:8080/portfolio/myPortfolio",
        requestOptions
      );
      const jsonData = await response.json();
      setPortfolio(jsonData);
      console.log("portfolio data: ", jsonData);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  function goBack() {
    navigation.navigate("Login");
  }

  function calculateTotalAmount() {
    portfolio.map(() => {
      let total = portfolio.reduce((total, curr) => total + curr.amount, 0);
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
            {/* <TotalWorth totalAmount={totalAmount} /> */}
            {/* PIE CHART */}

            <TotalWorth totalAmount={portfolio.portfolioSize} />

            {/* <Goal />
            <CategoryList totalAmount={totalAmount} portfolio={portfolio} /> */}
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

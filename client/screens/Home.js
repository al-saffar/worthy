import { ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import ScreenTemplate from "../components/ScreenTemplate";
import CategoryList from "../components/CategoryList";
import Goal from "../components/Goal";
import TotalWorth from "../components/TotalWorth";
import CryptoES from "crypto-es";

export default function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [user, setUser] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getUserData()
      .then((userData) => getPortfolio(userData))
      .then((portfolio) => calculateTotalAmount(portfolio))
      .then(() => console.log("chain done!"))
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      });
    setIsLoading(false);
  }, []);

  async function getUserData() {
    try {
      let response = await fetch("http://192.168.0.114:8080/user/me");
      let jsonData = await response.json();
      console.log("getUserData: ", jsonData);
      return jsonData;
      /*       setUser(jsonData); */
    } catch (error) {
      console.error(error);
    }
  }

  async function getPortfolio(userData) {
    const encrypted = CryptoES.SHA256(
      userData.email,
      userData.password
    ).toString();

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userData.id,
        email: userData.email,
        password: encrypted,
      }),
    };
    try {
      const response = await fetch(
        "http://192.168.0.114:8080/portfolio/myPortfolio",
        requestOptions
      );
      const jsonData = await response.json();
      return jsonData;
      //setPortfolio(jsonData);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  function goBack() {
    navigation.navigate("Login");
  }

  function calculateTotalAmount(portfolio) {
    console.log("portfolio data: ", portfolio);

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
            <TotalWorth totalAmount={totalAmount} />
            {/* PIE CHART */}

            {/* <Goal /> */}

            {/* <CategoryList totalAmount={totalAmount} portfolio={portfolio} />
             */}
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

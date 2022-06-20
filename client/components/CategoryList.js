import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import styles from "./../styles";
import { category } from "../category";

export default function CategoryList({ navigation }) {
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    calculateTotalAmount(category);
  });

  function calculateTotalAmount() {
    let total = category.reduce((total, curr) => total + curr.amount, 0);
    setTotalAmount(total);
  }

  function calculatePercentage(a) {
    let percent = ((a / totalAmount) * 100).toFixed(2);
    return percent;
    /* console.log("amount", amount / totalAmount) * 100;
    return (amount / totalAmount) * 100; */
  }

  function categories(list) {
    return list.map((element) => {
      return totalAmount ? (
        <View key={element.id} style={styles.listitems}>
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: "50%",
              marginTop: 10,
              marginBottom: 5,
              backgroundColor: `${element.color}`,
            }}
          ></View>
          <View style={styles.listtexts}>
            <Text style={styles.listtext}>{element.name}</Text>
            <Text style={styles.listtext}>
              {calculatePercentage(element.amount)}
              <Text> %</Text>
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <Text>Calculating</Text>
        </View>
      );
    });
  }

  return (
    <View style={styles.frame}>
      <Text style={styles.title2}>Categories</Text>
      <View style={styles.box}>
        {categories(category)}
        <Button
          onPress={() => navigation.navigate("Category")}
          title="+"
          color="#841584"
          accessibilityLabel="Add category"
        />
      </View>
    </View>
  );
}

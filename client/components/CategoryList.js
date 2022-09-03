import { View, Text, TouchableOpacity } from "react-native";
import styles from "./../styles";
import { category } from "../category";

export default function CategoryList({ navigation, totalAmount }) {
  function calculatePercentage(amount) {
    let percent = ((amount / totalAmount) * 100).toFixed(2);
    return percent;
  }

  function categories(list) {
    return list.map((element) => {
      return totalAmount ? (
        <View key={element.id} style={styles.listitemsleft}>
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
          <Text style={styles.listtext}>{element.name}</Text>
          <Text style={styles.listtexts}>
            {calculatePercentage(element.amount)}
            <Text> %</Text>
          </Text>
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
        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => navigation.navigate("Category")}
        >
          <Text style={{ textAlign: "center", paddingTop: 2 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

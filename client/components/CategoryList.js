import { View, Text, Button } from "react-native";
import styles from "./../styles";
import { diagram } from "../diagram";

export default function CategoryList({ navigation }) {
  function categories(list) {
    return list.map((element) => {
      return (
        <View key={element.index} style={styles.listitems}>
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
            <Text style={styles.listtext}>{element.name}</Text>
          </View>
        </View>
      );
    });
  }

  return (
    <View style={styles.frame}>
      <Text style={styles.title2}>Categories</Text>
      <View style={styles.box}>
        {categories(diagram)}
        <Button
          onPress={() => navigation.navigate("Category")}
          title="+"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

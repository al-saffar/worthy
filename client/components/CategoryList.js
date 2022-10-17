import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { category } from "../category";

export default function CategoryList({ totalAmount }) {
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

const styles = StyleSheet.create({
  addbutton: {
    marginTop: 5,
    marginBottom: 5,
    borderColor: "#868686",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
  },
  frame: {
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  title2: {
    color: "white",
    textTransform: "uppercase",
    paddingBottom: 10,
  },
  box: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 320,
  },
  listitems: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  listitemsleft: {
    flexDirection: "row",
    alignItems: "center",
  },
  listtexts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listtext: {
    color: "black",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ totalAmount, categories }) {
  const [selectedId, setSelectedId] = useState(null);

  function goToModalOfCategory(id) {
    console.log("Pressed on specific category:", id);
  }

  return (
    <View style={styles.frame}>
      <Text style={styles.title2}>Categories</Text>
      <View style={styles.box}>
        <FlatList
          data={categories}
          renderItem={(itemData) => {
            return (
              <CategoryItem
                name={itemData.item.name}
                id={itemData.item.id}
                amount={itemData.item.amount}
                color={itemData.item.color}
                totalAmount={totalAmount}
                onPressModalToCategory={goToModalOfCategory}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />

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

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

/*   function categories(list) {
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
  } */

/*   const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  ); */

/*   const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  }; */

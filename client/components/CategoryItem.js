import { View, Pressable, Text, StyleSheet } from "react-native";

export default function CategoryItem({
  onPressModalToCategory,
  name,
  id,
  amount,
  totalAmount,
  color,
}) {
  function calculatePercentage(amount) {
    let percent = ((amount / totalAmount) * 100).toFixed(2);
    return percent;
  }

  return (
    <Pressable onPress={onPressModalToCategory.bind(this, id)}>
      <View key={id} style={styles.listItemsRow}>
        <View style={styles.listItemsLeft}>
          <View style={[styles.circle, { backgroundColor: `${color}` }]}></View>
          <Text style={styles.listText}>{name}</Text>
        </View>
        <Text style={styles.listPercentage}>
          {calculatePercentage(amount)}
          <Text> %</Text>
        </Text>
      </View>
      <View style={styles.lineStyle} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listText: {
    color: "black",
    paddingLeft: 10,
    paddingRight: 10,
  },
  listPercentage: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 290,
  },
  listItemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 5,
    overflow: "hidden",
  },
  lineStyle: {
    borderWidth: 0.2,
    borderColor: "#F2F2F2",
    margin: 5,
  },
});

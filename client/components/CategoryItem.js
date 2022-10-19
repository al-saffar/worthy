import { Text, TouchableOpacity } from "react-native";

export default function CategoryItem({ onPress, name }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

/*  style={[styles.item, backgroundColor]} */

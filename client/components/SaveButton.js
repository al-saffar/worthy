import { View, Text, Pressable } from "react-native";
import styles from "./../styles";

export default function SaveButton({ navigation }) {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.savebutton}
      >
        <Text style={{ color: "white" }}>Save</Text>
      </Pressable>
    </View>
  );
}

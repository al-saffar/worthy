import { View, Text, Pressable } from "react-native";
import styles from "../styles";

export default function CancelButton() {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.cancelbutton}
      >
        <Text style={{ color: "white" }}>Cancel</Text>
      </Pressable>
    </View>
  );
}

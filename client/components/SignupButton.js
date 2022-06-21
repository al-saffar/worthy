import { View, Text, Pressable } from "react-native";
import styles from "../styles";

export default function SignupButton() {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.cancelbutton}
      >
        <Text style={{ color: "white" }}>Signup</Text>
      </Pressable>
    </View>
  );
}

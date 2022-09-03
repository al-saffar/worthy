import { View, Text, Pressable } from "react-native";
import styles from "../styles";

export default function LoginButton({ navigation }) {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.savebutton}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </Pressable>
    </View>
  );
}

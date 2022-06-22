import { View, Text, Pressable } from "react-native";
import styles from "../styles";

export default function SignupButton({ navigation }) {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Signup")}
        style={styles.cancelbutton}
      >
        <Text style={{ color: "white" }}>Signup</Text>
      </Pressable>
    </View>
  );
}

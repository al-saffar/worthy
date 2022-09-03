import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import styles from "../styles";
import CustomButton from "../components/CustomButton";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient colors={["#101010", "#2B2B2B"]} style={styles.background}>
      <Text style={styles.worthy}>WORTHY</Text>
      <Text style={styles.title1}>Login or signup for an account</Text>
      <CustomInput
        title="Username"
        username={username}
        setUsername={setUsername}
      />
      <CustomInput
        title="Password"
        password={password}
        setPassword={setPassword}
        secureTextEntry={true}
      />
      <CustomButton navigation={navigation} />
      <CustomButton navigation={navigation} />
    </LinearGradient>
  );
}

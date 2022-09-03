import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import styles from "../styles";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient colors={["#101010", "#2B2B2B"]} style={styles.background}>
      <Text style={styles.worthy}>WORTHY</Text>
      <Text style={styles.title1}>Create an account</Text>
      <CustomInput title="Name" name={name} setName={setName} />
      <CustomInput title="Email" email={email} setEmail={setEmail} />
      <CustomInput
        title="Username"
        username={username}
        setUsername={setUsername}
      />
      <CustomInput
        title="Password"
        password={password}
        setPassword={setPassword}
      />
    </LinearGradient>
  );
}

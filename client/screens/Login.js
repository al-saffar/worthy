import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Input from "../components/Input";
import styles from "./../styles";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient colors={["#101010", "#2B2B2B"]} style={styles.background}>
      <Text style={styles.worthy}>WORTHY</Text>
      <Text style={styles.title1}>Login or signup for an account</Text>
      <Input title="Username" username={username} setUsername={setUsername} />
      <Input title="Password" password={password} setPassword={setPassword} />
      <LoginButton />
      <SignupButton />
    </LinearGradient>
  );
}

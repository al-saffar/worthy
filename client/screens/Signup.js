import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Input from "../components/Input";
import styles from "../styles";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient colors={["#101010", "#2B2B2B"]} style={styles.background}>
      <Text style={styles.worthy}>WORTHY</Text>
      <Text style={styles.title1}>Create an account</Text>
      <Input title="Name" name={name} setName={setName} />
      <Input title="Email" email={email} setEmail={setEmail} />
      <Input title="Username" username={username} setUsername={setUsername} />
      <Input title="Password" password={password} setPassword={setPassword} />
      <LoginButton />
      <SignupButton navigation={navigation} />
    </LinearGradient>
  );
}

import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Input from "../components/Input";
import styles from "./../styles";
import SaveButton from "../components/SaveButton";
import CancelButton from "../components/CancelButton";

export default function Category() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [valuta, setValuta] = useState("");

  return (
    <LinearGradient colors={["#101010", "#2B2B2B"]} style={styles.background}>
      <Text style={styles.title2}>Category</Text>
      <Input title="Name" text={text} setText={setText} />
      <Input title="Amount" amount={amount} setAmount={setAmount} />
      <Input title="Valuta" valuta={valuta} setValuta={setValuta} />
      <SaveButton />
      <CancelButton />
    </LinearGradient>
  );
}

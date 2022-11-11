import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import CustomInput from "../components/CustomInput";

export default function Category() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [valuta, setValuta] = useState("");

  return (
    <LinearGradient colors={["#101010", "#2B2B2B"]} style={styles.background}>
      <Text style={styles.title2}>Category</Text>
      <CustomInput title="Name" text={text} setText={setText} />
      <CustomInput title="Amount" amount={amount} setAmount={setAmount} />
      <CustomInput title="Valuta" valuta={valuta} setValuta={setValuta} />
    </LinearGradient>
  );
}

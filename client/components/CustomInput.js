import { View, Text, TextInput } from "react-native";
import styles from "../styles";

export default function CustomInput({ text, setText, title, secureTextEntry }) {
  return (
    <View style={styles.input}>
      <Text style={styles.inputtext}>{title}</Text>
      <TextInput
        style={styles.inputbox}
        onChangeText={setText}
        value={text}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

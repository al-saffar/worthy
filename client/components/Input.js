import { View, Text, TextInput } from "react-native";
import styles from "./../styles";

export default function input({ text, setText, title }) {
  return (
    <View style={styles.input}>
      <Text style={styles.inputtext}>{title}</Text>
      <TextInput style={styles.inputbox} onChangeText={setText} value={text} />
    </View>
  );
}

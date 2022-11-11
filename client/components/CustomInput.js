import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CustomInput({ text, setText, title, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "80%",
  },
  inputTitle: {
    color: "white",
    paddingBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
  },
});

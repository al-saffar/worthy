import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function ResetPassword() {
  const [username, setUsername] = useState("");

  function onPressConfirm() {
    console.warn("Confirm is pressed");
  }

  function onPressBackToLogin() {
    console.warn("Back to Login is pressed");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          title="Username *"
          value={username}
          setValue={setUsername}
        />

        <CustomButton onPress={onPressConfirm} text="Send" type="PRIMARY" />
        <CustomButton
          onPress={onPressBackToLogin}
          text="Back to Login"
          type="TERITARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: "white",
    textAlign: "center",
    marginBottom: 35,
    fontSize: 24,
    marginTop: 30,
  },
  confirm: {
    color: "white",
    marginVertical: 5,
    width: "80%",
    marginBottom: 20,
  },
  link: {
    color: "#FFA800",
  },
});

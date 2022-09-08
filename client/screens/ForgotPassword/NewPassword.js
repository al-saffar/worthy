import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function NewPassword() {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function onPressSubmit() {
    console.warn("Submit is pressed");
  }

  function onPressBackToLogin() {
    console.warn("Back to Login is pressed");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <CustomInput title="Code" value={code} setValue={setCode} />

          <CustomInput
            title="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}
          />

          <CustomButton onPress={onPressSubmit} text="Submit" type="PRIMARY" />
          <CustomButton
            onPress={onPressBackToLogin}
            text="Back to Login"
            type="TERIRATY"
          />
        </View>
      </ScreenTemplate>
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

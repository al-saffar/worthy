import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useNavigation } from "@react-navigation/native";

export default function ResetPassword() {
  //const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  function onPressConfirm() {
    console.warn("Confirm is pressed");
  }

  function onPressBackToLogin() {
    console.warn("Back to Login is pressed");
    navigation.navigate("Login");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>
          <CustomInput title="Email *" value={email} setValue={setEmail} />

          <CustomButton onPress={onPressConfirm} text="Send" type="PRIMARY" />
          <CustomButton
            onPress={onPressBackToLogin}
            text="Back to Login"
            type="TERITARY"
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

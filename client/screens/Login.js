import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import Logo from "../assets/images/Worthy.png";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialLoginButtons from "../components/SocialLoginButtons";

export default function Login() {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onPressLogin() {
    console.warn("Login is pressed");
  }

  function onPressSignup() {
    console.warn("Signup is pressed");
  }

  function onPressForgotPassword() {
    console.warn("Forgot password is pressed");
  }

  function onPressCreateAccount() {
    console.warn("Create an account is pressed");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <CustomInput title="Username" value={username} setValue={setUsername} />
        <CustomInput
          title="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onPressLogin} text="Login" type="PRIMARY" />
        <CustomButton onPress={onPressSignup} text="Signup" type="SECONDARY" />
        <CustomButton
          onPress={onPressForgotPassword}
          text="Forgot password?"
          type="TERITARY"
        />
        <View style={styles.space} />
        <SocialLoginButtons />
        <CustomButton
          onPress={onPressCreateAccount}
          text="Don't have an account? Create one"
          type="TERITARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: "60%",
    maxWidth: 300,
    maxHeight: 100,
    resizeMode: "contain",
    marginBottom: 15,
    marginTop: 20,
  },
  space: {
    height: 20,
  },
});

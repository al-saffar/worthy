import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../assets/images/Worthy.png";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

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

  function onPressFacebook() {
    console.warn("Login with Facebook is pressed");
  }

  function onPressGoogle() {
    console.warn("Login with Google is pressed");
  }

  function onPressApple() {
    console.warn("Login with Apple is pressed");
  }

  function onPressCreateAccount() {
    console.warn("Create an account is pressed");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <CustomInput
          title="Username"
          username={username}
          setUsername={setUsername}
        />
        <CustomInput
          title="Password"
          password={password}
          setPassword={setPassword}
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
        <CustomButton
          onPress={onPressFacebook}
          text="Login with Facebook"
          type="SECONDARY"
          txtColor="#4765A9"
          bgColor="#E7EAF4"
        />
        <CustomButton
          onPress={onPressGoogle}
          text="Login with Google"
          type="SECONDARY"
          txtColor="#DD4D44"
          bgColor="#FAE9EA"
        />
        <CustomButton
          onPress={onPressApple}
          text="Login with Apple"
          type="SECONDARY"
          txtColor="#363636"
          bgColor="#e3e3e3"
        />
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

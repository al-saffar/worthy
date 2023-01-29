import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
  Alert,
} from "react-native";
import Logo from "../assets/images/Worthy.png";
import { useState, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialLoginButtons from "../components/SocialLoginButtons";
import ScreenTemplate from "../components/ScreenTemplate";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  //const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [approvedAccess, setApprovedAccess] = useState(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  // TODO: Login as a useContext
  // TODO:  sha1 react (lave crypteret password)

  useEffect(() => {
    if (approvedAccess) {
      navigation.navigate("Home");
    }
  }, [approvedAccess]);

  function onPressLogin() {
    sendLoginDetails();
  }

  function onPressSignup() {
    navigation.navigate("Signup");
  }

  function onPressForgotPassword() {
    navigation.navigate("ResetPassword");
  }

  async function sendLoginDetails() {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    try {
      //console.log("requestion", requestOptions);
      const response = await fetch(
        "http://192.168.0.114:8080/user/login",
        requestOptions
      );
      const data = await response.json();
      setApprovedAccess(data);
      console.log("data: ", data);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
          />
          <CustomInput title="Email" text={email} setText={setEmail} />
          <CustomInput
            title="Password"
            text={password}
            setText={setPassword}
            secureTextEntry={true}
          />
          <CustomButton onPress={onPressLogin} text="Login" type="PRIMARY" />
          <CustomButton
            onPress={onPressSignup}
            text="Signup"
            type="SECONDARY"
          />
          <CustomButton
            onPress={onPressForgotPassword}
            text="Forgot password?"
            type="TERITARY"
          />
          <View style={styles.space} />
          <SocialLoginButtons />
          <CustomButton
            onPress={onPressSignup}
            text="Don't have an account? Create one"
            type="TERITARY"
          />
        </View>
      </ScreenTemplate>
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

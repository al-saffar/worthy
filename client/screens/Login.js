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
import ScreenTemplate from "../components/ScreenTemplate";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  //const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [access, requireAccess] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  function onPressLogin() {
    navigation.navigate("Home");
  }

  function onPressSignup() {
    navigation.navigate("Signup");
  }

  function onPressForgotPassword() {
    navigation.navigate("ResetPassword");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
          />
          <CustomInput title="Email" value={email} setValue={setEmail} />
          <CustomInput
            title="Password"
            value={password}
            setValue={setPassword}
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

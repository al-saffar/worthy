import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialLoginButtons from "../components/SocialLoginButtons";
import ScreenTemplate from "../components/ScreenTemplate";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  //const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("Møffe");
  const [lastName, setLastName] = useState("l-møffe");
  const [email, setEmail] = useState("møffe@gamil.com");
  const [password, setPassword] = useState("123");
  const [passwordRepeat, setPasswordRepeat] = useState("123");

  const navigation = useNavigation();

  function onPressRegister() {
    console.warn("Register is pressed");

    postExample();

    //`192.168.0.210/user/add -d firstName=${firstName}-d lastName=${lastName} -d email=${email}`;

    //navigation.navigate("Dashboard");

    //fetch("192.168.0.210/"
  }

  async function postExample() {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    };
    try {
      await fetch("http://127.0.0.1:8080/user/add", requestOptions).then(
        (response) => {
          response.json().then((data) => {
            Alert.alert("Post created at : ", data.createdAt);
          });
        }
      );
    } catch (error) {
      console.error("fejlen?", error);
    }
  }

  function onPressTermsOfUse() {
    console.warn("Terms of Use pressed");
  }

  function onPressPrivacyPolicy() {
    console.warn("Privacy Policy pressed");
  }

  function onPressLogin() {
    console.warn("Login is pressed");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>
          <CustomInput
            title="Firstname"
            value={firstName}
            setValue={setFirstName}
          />
          <CustomInput
            title="Lastname"
            value={lastName}
            setValue={setLastName}
          />
          <CustomInput title="Email" username={email} setUsername={setEmail} />
          <CustomInput
            title="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomInput
            title="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={true}
          />
          <CustomButton
            onPress={onPressRegister}
            text="Register"
            type="PRIMARY"
          />
          <Text style={styles.confirm}>
            By registering, you confirm that you accept our{" "}
            <Text style={styles.link} onPress={onPressTermsOfUse}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={styles.link} onPress={onPressPrivacyPolicy}>
              Privacy Policy
            </Text>
          </Text>
          <SocialLoginButtons />
          <CustomButton
            onPress={onPressLogin}
            text="Have an account? Login"
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

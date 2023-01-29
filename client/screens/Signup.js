import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialLoginButtons from "../components/SocialLoginButtons";
import ScreenTemplate from "../components/ScreenTemplate";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  //const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
<<<<<<< Updated upstream
  const [success, setSuccess] = useState("");
=======
  const [response, setResponse] = useState(false);
>>>>>>> Stashed changes

  // TODO: sha1 react (lave crypteret password)
  // TODO: verify that the passwords are the same
  // TODO: check that all the fields are not null and e-mail has a "@"
  // TODO: feedback to user with successfully signed up..

  const navigation = useNavigation();

  function onPressRegister() {
    console.log("Register is pressed");
    createNewUser();
    if (response) {
      navigation.navigate("Login");
    } else {
      Alert.alert("Something went wrong!!! Please try again.");
    }
  }

  // create user en backend - works!
  async function createNewUser() {
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
      //console.log("requestion", requestOptions);
<<<<<<< Updated upstream
      const response = await fetch(
        "http://192.168.0.210:8080/user/add",
        requestOptions
=======
      await fetch("http://192.168.0.114:8080/user/add", requestOptions).then(
        (response) => {
          response.json().then((data) => {
            setResponse(data);
            console.log("response ", data);
          });
        }
>>>>>>> Stashed changes
      );
      const data = await response.text(); //recieve a string
      console.log("data", data);
      setSuccess(data);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  function onPressTermsOfUse() {
    console.log("Terms of Use pressed");
  }

  function onPressPrivacyPolicy() {
    console.log("Privacy Policy pressed");
  }

  function onPressLogin() {
    console.log("Login is pressed");
    navigation.navigate("Login");
  }

  if (success === "User created") {
    navigation.navigate("Home");
  }

  let mail = (
    <CustomInput
      title="Email"
      text={email}
      setText={setEmail}
      autoCapitalize="none"
    />
  );

  if (success === "User already exists") {
    mail = (
      <>
        <CustomInput
          title="Email"
          text={email}
          setText={setEmail}
          autoCapitalize="none"
        />
        <Text style={styles.mailExists}>
          User already exists.{" "}
          <TouchableWithoutFeedback
            style={styles.pressLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.mailLogin}>Please Login</Text>
          </TouchableWithoutFeedback>
        </Text>
      </>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>
          <CustomInput
            title="Firstname"
            text={firstName}
            setText={setFirstName}
          />
          <CustomInput title="Lastname" text={lastName} setText={setLastName} />
          {mail}
          <CustomInput
            title="Password"
            text={password}
            setText={setPassword}
            secureTextEntry={true}
          />
          <CustomInput
            title="Repeat Password"
            text={passwordRepeat}
            setText={setPasswordRepeat}
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
  mailExists: {
    color: "red",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -15,
    marginBottom: 10,
  },
  mailLogin: {
    color: "red",
    textDecorationLine: "underline",
  },
});

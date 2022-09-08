import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screns
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ConfirmEmail from "../screens/ConfirmEmail";
import ResetPassword from "../screens/ForgotPassword/ResetPassword";
import NewPassword from "../screens/ForgotPassword/NewPassword";
import Home from "../screens/Home";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

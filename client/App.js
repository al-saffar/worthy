import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, createContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

import Dashboard from "./screens/Dashboard";
import Category from "./screens/Category";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

export default function App() {
  const Stack = createStackNavigator();
  const LoginContext = createContext();
  const [isLoggedIn, setIsLoggedin] = useState(false);

  return isLoggedIn ? (
    <View style={styles.root}>
      <LoginContext.Provider value={isLoggedIn}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Category" component={Category} />
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContext.Provider>
    </View>
  ) : (
    <View style={styles.root}>
      <LoginContext.Provider value={isLoggedIn}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              setIsLoggedin={setIsLoggedin}
            />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

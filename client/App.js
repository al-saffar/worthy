import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import Category from "./screens/Category";
import Login from "./screens/Login";

export default function App() {
  const Stack = createStackNavigator();
  const [isLoggedIn, setIsLoggedin] = useState(false);

  return isLoggedIn ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Login />
  );
}

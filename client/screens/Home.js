import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function goBack() {
    navigation.navigate("Login");
  }

  return (
    <View>
      <Text>Homescreen</Text>
      <CustomButton
        onPress={goBack}
        text="GO BACK"
        type="PRIMARY"
      ></CustomButton>
    </View>
  );
}

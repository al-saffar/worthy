import { Text, Pressable } from "react-native";
import { useContext } from "react";
import { LoginContext } from "../App";

export default function CustomButton({ onPress, text, type }) {
  /* const login = useContext(LoginContext); */

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      {/* <Pressable onPress={setIsLoggedin(true)} style={styles.savebutton}> */}
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 280,
    marginTop: 20,
  },
  container_PRIMARY: {
    backgroundColor: "#FFA800",
  },
  container_TERITARY: {
    borderColor: "#868686",
    borderStyle: "solid",
    borderWidth: 1,
  },
  text: {
    color: "white",
  },
  text_PRIMARY: {},
  text_TERITARY: {},
});

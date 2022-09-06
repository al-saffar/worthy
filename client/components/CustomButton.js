import { Text, Pressable, StyleSheet } from "react-native";
import { useContext } from "react";
import { LoginContext } from "../App";

export default function CustomButton({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  txtColor,
}) {
  /* const login = useContext(LoginContext); */

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      {/* <Pressable onPress={setIsLoggedin(true)} style={styles.savebutton}> */}
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          txtColor ? { color: txtColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 5,
    borderRadius: 4,
    elevation: 3,
    width: "80%",
  },
  container_PRIMARY: {
    backgroundColor: "#FFA800",
  },
  container_SECONDARY: {
    borderColor: "#868686",
    borderStyle: "solid",
    borderWidth: 1,
  },
  container_TERITARY: {},
  text: {
    color: "white",
  },
  text_PRIMARY: {},
  text_SECONDARY: {},
  text_TERITARY: {},
});

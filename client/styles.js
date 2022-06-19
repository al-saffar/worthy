import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    padding: 30,
  },
  title1: {
    color: "white",
    textAlign: "center",
  },
  title2: {
    color: "white",
    textTransform: "uppercase",
    paddingBottom: 10,
  },
  totalworth: {
    color: "white",
    height: 54,
    top: 37,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 30,
    lineHeight: 43,
    //text-shadow: 0px 4px 4px #000000
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  piechart: {
    paddingVertical: 15,
    flexDirection: "row",
    width: "100%",
  },
  box: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  listitems: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  listtexts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listtext: {
    color: "black",
    paddingLeft: 10,
  },
  input: {
    /* borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1, */
    marginBottom: 20,
  },
  inputtext: {
    color: "white",
    paddingBottom: 10,
  },
  inputbox: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: 280,
    backgroundColor: "white",
    borderRadius: 5,
  },
  savebutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FFA800",
    width: 280,
    marginTop: 20,
  },
  cancelbutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 280,
    borderColor: "#868686",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 20,
  },
});

export default styles;

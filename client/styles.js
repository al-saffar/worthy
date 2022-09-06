import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  frame: {
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
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
  box: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 320,
  },
  bar: {
    backgroundColor: "#C4C4C4",
    height: 5,
    width: 300,
    borderRadius: 5,
    marginTop: 3,
  },
  barstatus: {
    backgroundColor: "#52FF6E",
    height: 5,
    width: 200,
    borderRadius: 5,
  },
  goaltexts: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    paddingTop: 7,
  },
  goaltext: {
    color: "black",
  },
  listitems: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  listitemsleft: {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1,
  },
  listtexts: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#868686",
    borderStyle: "solid",
    borderWidth: 1,
  },
  listtext: {
    color: "black",
    paddingLeft: 10,
  },
  addbutton: {
    marginTop: 5,
    marginBottom: 5,
    borderColor: "#868686",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
  },
});

export default styles;

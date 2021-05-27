import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    color: "black",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerWrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  bodyWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  player1Header: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  player2Header: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  player1Wrap: {
    paddingVertical: 30,
  },
  player2Wrap: {
    paddingVertical: 30,
  },
});

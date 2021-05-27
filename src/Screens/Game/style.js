import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  player1Wrap: {
    flexDirection: "row",
  },
  player2Wrap: {
    flexDirection: "row",
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
    fontSize: 25,
    fontWeight: "bold",
  },
  headerWrap: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  seperator: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "grey",
    paddingVertical: 10,
    flexDirection: "row",
  },
  body: {
    flex: 1,
  },
  winnerWrap: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  currentWinner: {
    fontSize: 20,
    fontWeight: "bold",
  },
  currentWinnerName: {
    fontSize: 20,
    paddingHorizontal: 20,
    maxWidth: "60%",
  },
  differenceWrap: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  winDiff: {
    fontSize: 20,
    fontWeight: "bold",
  },
  winDiffCount: {
    fontSize: 20,
    paddingHorizontal: 20,
    maxWidth: "60%",
  },
});

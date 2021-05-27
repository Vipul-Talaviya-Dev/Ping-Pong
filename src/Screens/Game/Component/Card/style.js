import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  mainCardView: {
    height: 90,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    // shadowColor: 'shadow',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 1,
    // shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  playerName: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  winsWrap: {
    marginTop: 4,
    borderWidth: 0,
    width: "85%",
  },
  winsTitle: {
    color: "gray",
    fontSize: 14,
  },
  winCount: {
    height: 25,
    backgroundColor: "red",
    borderWidth: 0,
    width: 25,
    marginLeft: -26,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  winNumber: {
    color: "white",
  },
  titleWrap: {
    marginLeft: 12,
  },
});

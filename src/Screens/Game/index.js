import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./style";

import Card from "./Component/Card";
import Button from "../../Component/Button";

const Game = ({navigation, route}) => {
  const player1 = route.params?.params?.player1;
  const player2 = route.params?.params?.player2;

  const [player1WinCount, setPlayer1WinCount] = useState(0);
  const [player2WinCount, setPlayer2WinCount] = useState(0);
  const [currentWinner, setCurrentWinner] = useState("");
  const [winDifference, setWinDifference] = useState(0);

  useEffect(() => {
    if (player1WinCount > player2WinCount) {
      setWinDifference(player1WinCount - player2WinCount);
      setCurrentWinner(player1);
    } else if (player2WinCount > player1WinCount) {
      setWinDifference(player2WinCount - player1WinCount);
      setCurrentWinner(player2);
    } else {
      setWinDifference(0);
      setCurrentWinner("");
    }
  }, [player1WinCount, player2WinCount]);

  const handlePlayer1Count = () => {
    setPlayer1WinCount(player1WinCount + 1);
  };

  const handlePlayer2Count = () => {
    setPlayer2WinCount(player2WinCount + 1);
  };

  const handlePress = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.header}>Start Playing</Text>
      </View>

      <Card
        playerName={player1}
        count={player1WinCount}
        onPress={handlePlayer1Count}
      />

      <Card
        playerName={player2}
        count={player2WinCount}
        onPress={handlePlayer2Count}
      />

      <View style={styles.seperator} />

      <View style={styles.body}>
        <View style={styles.winnerWrap}>
          <Text style={styles.currentWinner}>CURRENT WINNER:</Text>
          <Text style={styles.currentWinnerName} numberOfLines={3}>
            {currentWinner}
          </Text>
        </View>

        <View style={styles.differenceWrap}>
          <Text style={styles.winDiff}>WIN DIFFERENCE:</Text>
          <Text style={styles.winDiffCount}>{winDifference}</Text>
        </View>
      </View>

      <View style={{alignItems: "center"}}>
        <Button title="Save" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default Game;

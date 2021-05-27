import React, {useState, useEffect} from "react";
import {SafeAreaView, View, Text} from "react-native";
import styles from "./style";

import Card from "./Component/Card";

const Game = ({navigation, route}) => {
  const player1 = route.params?.params?.player1;
  const player2 = route.params?.params?.player2;

  const [player1WinCount, setPlayer1WinCount] = useState(0);
  const [player2WinCount, setPlayer2WinCount] = useState(0);

  const handlePlayer1Count = () => {
    setPlayer1WinCount(player1WinCount + 1);
  };

  const handlePlayer2Count = () => {
    setPlayer2WinCount(player2WinCount + 1);
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
    </SafeAreaView>
  );
};

export default Game;

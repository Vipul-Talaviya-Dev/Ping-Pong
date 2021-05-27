import React, {Fragment, useState, useEffect} from "react";
import {View, Text, SafeAreaView} from "react-native";
import styles from "./style";

import TextInput from "../../Component/TextInput";
import Button from "../../Component/Button";

const Home = ({navigation}) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleContinue = () => {
    console.log("Player 1", player1);
    console.log("Player 1", player2);

    navigation.navigate("game", {
      params: {
        player1: player1,
        player2: player2,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.header}>Ping Pong</Text>
      </View>
      <View style={styles.bodyWrap}>
        <View style={styles.player1Wrap}>
          <Text style={styles.player1Header}>Player 1 name:</Text>
          <TextInput
            name={player1}
            setName={setPlayer1}
            placeholderName="Enter Player 1"
          />
        </View>

        <View style={styles.player2Wrap}>
          <Text style={styles.player2Header}>Player 2 name:</Text>
          <TextInput
            name={player2}
            setName={setPlayer2}
            placeholderName="Enter Player 2"
          />
        </View>

        <Button title={"Continue"} onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

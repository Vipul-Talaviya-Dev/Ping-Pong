import React, {Fragment, useState, useEffect} from "react";
import {View, Text, TouchableOpacity} from "react-native";

import styles from "./style";

import AddWinButton from "../AddWinsButton";

const CardView = ({onPress, count, playerName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCardView}>
        <View style={styles.titleWrap}>
          <Text style={styles.playerName} numberOfLines={2}>
            {playerName}
          </Text>
          <View style={styles.winsWrap}>
            <Text style={styles.winsTitle}> Wins </Text>
          </View>
        </View>

        <View style={styles.winCount}>
          <Text style={styles.winNumber}>{count}</Text>
        </View>
      </View>

      <AddWinButton onPress={onPress} title={"Add Win"} />
    </View>
  );
};

export default CardView;

import React from "react";
import {TextInput} from "react-native";
import styles from "./style";

const Home = ({name, setName, placeholderName}) => {
  return (
    <TextInput
      value={name}
      onChangeText={(name) => setName(name)}
      placeholder={placeholderName}
      placeholderTextColor="grey"
      style={styles.input}
    />
  );
};

export default Home;

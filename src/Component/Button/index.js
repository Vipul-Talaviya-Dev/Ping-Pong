import React, {Fragment} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import styles from "./style";

const ButtonComponent = ({onPress, title}) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.buttonWrap} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default ButtonComponent;

import React, {Fragment} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import styles from "./style";

const ButtonComponent = ({onPress, title, disabled}) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={styles.buttonWrap}
        onPress={onPress}
        disabled={disabled}
        testID={'pressMeButton'}
      >
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default ButtonComponent;

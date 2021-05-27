import React, {Fragment} from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./style";

const AddWinsButtonComponent = ({onPress, title}) => {
  return (
    <Fragment>
      <TouchableOpacity style={styles.buttonWrap} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default AddWinsButtonComponent;

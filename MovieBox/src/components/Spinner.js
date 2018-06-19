import React from "react";
import {View} from "react-native";
import {ActivityIndicator, StyleSheet} from "react-native";

const Spinner = ({size = "small"}) => {
  return (
    <View style={styles.container}>
       <ActivityIndicator size = {size} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Spinner;
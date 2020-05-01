import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <View style={globalStyles.button}>
        <Button title="Home" onPress={pressHandler} />
      </View>
    </View>
  );
}

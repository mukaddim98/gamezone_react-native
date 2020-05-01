import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.push("ReviewDetails");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <View style={globalStyles.button}>
        <Button title="Review Details" onPress={pressHandler} />
      </View>
    </View>
  );
}

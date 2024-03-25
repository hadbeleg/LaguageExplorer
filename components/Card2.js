import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card2 = ({ hehe }) => {
  return (
    <ImageBackground
      imageStyle={{ borderRadius: 20 }}
      source={hehe}
      style={{
        height: 200,
        width: "100%",
        borderRadius: 20,
        alignItems: "flex-end",
        marginTop: 40,
      }}
    >
      <View style={styles.texts}>
        <Text style={styles.text2}>Challenge</Text>
        <Text style={{ fontSize: 30, color: "white" }}>March</Text>
        <Text style={{ fontSize: 30, color: "white" }}>Month</Text>
      </View>
    </ImageBackground>
  );
};

export default Card2;

const styles = StyleSheet.create({
  text2: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  texts: {
    justifyContent: "center",

    flex: 1,
  },
});

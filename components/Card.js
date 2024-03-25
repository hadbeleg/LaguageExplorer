import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ backimage }) => {
  return (
    <ImageBackground
      imageStyle={{ borderRadius: 20 }}
      source={backimage}
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
        <Text style={{ fontSize: 30 }}>November</Text>
        <Text style={{ fontSize: 30 }}>Month</Text>
      </View>
    </ImageBackground>
  );
};

export default Card;

const styles = StyleSheet.create({
  text2: {
    fontSize: 40,
    fontWeight: "bold",
  },
  texts: {
    // paddingTop: 20,
    justifyContent: "center",

    flex: 1,
  },
});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
const Index = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navigate to your login screen or perform any other action
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.balloon}>
        <View style={styles.arhani}>
          {/* <Image source={require("../assets/Lemon.jpg")} style={styles.image} /> */}
          <Text style={styles.text}>Welcome to My App!</Text>
        </View>
        <Text style={styles.subtext}>
          Get started exploring the amazing features.
        </Text>
      </View>
      <View>
        <Link href="Signin" asChild>
          <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
            <Text style={styles.buttonText}>Signin</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </Link>
        <Link href="SignUp" asChild>
          <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
            <Text style={styles.buttonText}>SignUp</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7300",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 18,
    color: "#fff",
    fontStyle: "italic",
  },
  balloon: {
    backgroundColor: "#FFD700",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    maxWidth: 300,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
});

export default Index;

import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const profile = require("./images/images.jpg");
const backimage = require("./images/brown.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <FontAwesome6 name="bars-staggered" size={42} color="black" />
        <Image
          source={profile}
          style={{ height: 60, width: 60, borderRadius: 60 }}
        />
      </View>
      <View style={styles.text}>
        <Text style={{ fontSize: 60, color: "brown" }}>Your</Text>
        <Text style={{ fontSize: 60, color: "brown" }}>Learning!</Text>
      </View>
      <View style={styles.mune}>
        <TouchableOpacity style={styles.menu}>
          <Text>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text>Translate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text>Word list</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text>Word hunt</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={backimage}
        style={{
          height: 200,
          width: 400,
          borderRadius: 20,
          alignItems: "flex-end",
        }}
      >
        <View style={styles.texts}>
          <Text style={{ fontSize: 30 }}>Challenge</Text>
          <Text style={styles.text2}>November</Text>
          <Text style={styles.text2}>Month</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        source={backimage}
        style={{
          height: 200,
          width: 400,
          borderRadius: 20,
          alignItems: "flex-end",
          marginTop: 40,
        }}
      >
        <View style={styles.texts}>
          <Text style={{ fontSize: 30 }}>Challenge</Text>
          <Text style={styles.text2}>November</Text>
          <Text style={styles.text2}>Month</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    borderRadius: 50,
    backgroundColor: "pink",
    borderWidth: 1,
    padding: 7,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },
  mune: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: 40,
  },
  text2: {
    fontSize: 40,
  },
  texts: {
    // paddingTop: 20,
    justifyContent: "center",

    flex: 1,
  },
});

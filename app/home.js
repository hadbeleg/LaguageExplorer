import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import Card from "../components/Card";
import Card2 from "../components/Card2";
const profile = require("../images/images.jpg");
const backimage = require("../images/bg.jpg");
const idk = require("../images/istockphoto-1012331444-1024x1024.jpg");
const hehe = require("../images/istockphoto-1458045238-1024x1024.jpg");

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <FontAwesome6 name="bars-staggered" size={42} color="Dark" />
        <Image
          source={profile}
          style={{ height: 60, width: 60, borderRadius: 60 }}
        />
      </View>
      <View>
        <Image source={idk} style={styles.idkk} />
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
      <Card backimage={backimage} />
      <Card2 hehe={hehe} />
    </ScrollView>
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
    paddingHorizontal: 8,
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
    // marginBottom: 40,
  },
  text2: {
    fontSize: 40,
    fontWeight: "bold",
  },
  texts: {
    // paddingTop: 20,
    justifyContent: "center",

    flex: 1,
  },
  idkk: {
    marginTop: 10,
    width: 397,
    height: 200,
    borderRadius: 10,
  },
});

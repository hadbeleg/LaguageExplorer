import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from "expo-router";

const Signin = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const focusEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const focusPasswordInput = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signin</Text>
      <View>
        <TouchableOpacity onPress={focusEmailInput}>
          <Text style={styles.inputLabel}>Email Address</Text>
        </TouchableOpacity>
        <TextInput
          ref={emailInputRef}
          style={styles.input}
          keyboardType="email-address"
          placeholder="Enter your email"
          autoCapitalize="none"
        />
      </View>
      <View>
        <TouchableOpacity onPress={focusPasswordInput}>
          <Text style={styles.inputLabel}>Password</Text>
        </TouchableOpacity>
        <TextInput
          ref={passwordInputRef}
          style={styles.input}
          secureTextEntry
          placeholder="Enter your password"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Link href="/SignUp">
          <Text style={styles.buttonText}>Go to SignUp</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7300",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: "white",
  },
  inputLabel: {
    color: "white",
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Signin;

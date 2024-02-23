import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const SignUp = () => {
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
      <Text style={styles.title}>SignUp</Text>
      <Text style={styles.inputLabel} onPress={focusEmailInput}>
        Email Address
      </Text>
      <TextInput
        ref={emailInputRef}
        style={styles.input}
        keyboardType="email-address"
        placeholder="Enter your email"
        autoCapitalize="none"
      />
      <Text style={styles.inputLabel} onPress={focusPasswordInput}>
        Password
      </Text>
      <TextInput
        ref={passwordInputRef}
        style={styles.input}
        secureTextEntry
        placeholder="Enter your password"
      />
      <TouchableOpacity style={styles.button}>
        <Link href="/Signin">
          <Text style={styles.buttonText}>Go to Login</Text>
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
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputLabel: {
    color: "white",
    marginBottom: 5,
    textDecorationLine: "underline",
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

export default SignUp;

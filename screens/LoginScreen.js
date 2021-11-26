import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input placeholder="Enter your Email here" autoFocus type="email" />
        <Input placeholder="Password" secureTextEntry type="password" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {},
});

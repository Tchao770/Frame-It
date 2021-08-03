import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./navigation/BottomNav";
import UploadScreen from "./screens/UploadScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <UploadScreen />
      <BottomNav />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

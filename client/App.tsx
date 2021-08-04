import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./src/navigation/BottomNav";
import EditScreen from "./src/screens/EditScreen";

interface ImageData {
  uri: string;
  height: number;
  width: number;
}

export default function App() {
  const [image, setImage] = useState<ImageData>();
  return (
    <View style={styles.container}>
      <EditScreen image={image} />
      <BottomNav setImage={setImage} />
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

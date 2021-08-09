import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./src/navigation/BottomNav";
import EditScreen from "./src/screens/EditScreen";
import { ImageObj, ImageProp } from "./src/types/data";
import {
  ImageProvider,
  useGlobalImageContext,
} from "./src/context/ImageContext";

export default function App() {
  // Explore Context API for handling image state
  const [image, setImage] = useState<ImageObj>({
    uri: "",
    width: 0,
    height: 0,
    base64: "",
  });

  return (
    <ImageProvider>
      <View style={styles.container}>
        <EditScreen image={image} setImage={setImage} />
        <BottomNav image={image} setImage={setImage} />
        <StatusBar style="auto" />
      </View>
    </ImageProvider>
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

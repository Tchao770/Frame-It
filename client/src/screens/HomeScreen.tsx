import React, { useState } from "react";
import { Button, Image, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import UploadButton from "../components/UploadButton";
import { handleUpload } from "../logic/handleUpload";
import { ImageObj } from "../types/data";

export default function HomeScreen({ navigation }: any) {
  // Explore Context API for handling image state
  const [image, setImage] = useState<ImageObj>({
    uri: "",
    width: 0,
    height: 0,
    base64: "",
  });

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Frame It</Text>
      <Image
        source={image.uri ? { uri: image.uri } : { uri: "placeholder.png" }}
        style={styles.previewImg}
      />
      <Button
        title="Edit"
        onPress={() =>
          navigation.navigate("Edit", {
            image: image,
          })
        }
      />
      <Button title="Frame It!" onPress={() => handleUpload(image)} />
      <UploadButton image={image} setImage={setImage} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "lightgray",
    flex: 1,
  },
  title: { fontSize: 35 },
  previewImg: {
    height: 400,
    width: 400,
    resizeMode: "contain",
    backgroundColor: "white",
  },
});

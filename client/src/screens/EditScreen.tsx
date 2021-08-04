import React from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import UploadWindow from "../components/UploadButton";
import { ImageProp } from "../types/data";

const EditScreen: React.FC<ImageProp> = ({ image }) => {
  console.log(image);
  return (
    <SafeAreaView style={styles.uploadContainer}>
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: image.width / 4, height: image.height / 4 }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    width: "100%",
    height: "90%",
    backgroundColor: "gray",
  },
});

export default EditScreen;

import React from "react";
import { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImageObj, ImageProp } from "../types/data";

const UploadButton: React.FC<ImageProp> = ({ setImage }) => {
  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry we need camera roll permissions!");
        }
      }
    };
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      let resultObj: ImageObj = {
        uri: result.uri,
        height: result.height,
        width: result.width,
      };
      /*
      change the height and width before setting the image
      rescaleImage(image);
      */
      setImage(resultObj);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.uploadContainer}>
      <Image
        source={require("../assets/upload.svg")}
        style={{ height: 20, width: 20 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: "dodgerblue",
  },
});

export default UploadButton;

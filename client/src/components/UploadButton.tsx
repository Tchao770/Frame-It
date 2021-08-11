import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImageObj, ImageProp } from "../types/data";

const UploadButton = ({ setImage }: ImageProp) => {
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
      /*
      allowsEditing: true,
        - iOS: Only Resizing, no cropping
        - Android: Everything.
      */
      quality: 1,
    });
    //console.log(result);
    if (!result.cancelled) {
      let resultObj: ImageObj = {
        uri: result.uri,
        height: result.height,
        width: result.width,
      };
      setImage(resultObj);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.uploadContainer}>
      <Text style={styles.uploadText}>Upload</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadText: {
    paddingBottom: 4,
  },
});

export default UploadButton;

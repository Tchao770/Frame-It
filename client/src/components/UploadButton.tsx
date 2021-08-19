import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import { ImageObj, ImageProp } from "../types/data";

const UploadButton = ({ setImage, navigation }: any) => {
  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Media Library Permission Denied");
        }
      }
    };
  }, []);

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      /*
      allowsEditing: true,
        - iOS: Only Resizing, no cropping
        - Android: Everything.
      */
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      let resultObj: ImageObj = {
        uri: result.uri,
        height: result.height,
        width: result.width,
        base64: result.base64,
      };
      setImage(resultObj);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.uploadContainer}>
      <Text style={styles.uploadText}>Choose a Photo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    height: 60,
    width: 140,
    borderRadius: 50,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadText: {
    color: "white",
    paddingBottom: 4,
  },
});

export default UploadButton;

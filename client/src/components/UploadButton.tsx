import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImageProp } from "../types/data";

const UploadButton: React.FC<ImageProp> = ({ setImage }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry we need camera roll permissions!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage({ uri: result.uri, height: result.height, width: result.width });
    }
  };

  return (
    <View style={styles.uploadContainer}>
      <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
        <Image
          source={require("../assets/upload.svg")}
          style={{ height: 20, width: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    height: "100%",
    width: "20%",
    backgroundColor: "dodgerblue",
  },
  uploadButton: {
    height: 20,
    width: 20,
  },
});

export default UploadButton;

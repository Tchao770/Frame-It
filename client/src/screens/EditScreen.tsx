import { manipulateAsync } from "expo-image-manipulator";
import React, { useRef, useEffect } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ImageObj, ImageProp } from "../types/data";
import { changeImage } from "../logic/changeImage";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

const EditScreen = ({ image, setImage }: ImageProp) => {
  const handlePromise = (items: any) => {
    return Promise.all(items);
  };

  const handleImageChange = async (type: string) => {
    changeImage(image, type)?.then((resolve) => {
      setImage(resolve);
    });
  };

  const handleUpload = async () => {
    fetch("http://172.19.112.1:8080/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uri: image?.base64,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        Alert.alert("upload failed");
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.editContainer}>
      <View style={styles.publishNav}>
        <Button title="Save" onPress={handleUpload} />
      </View>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={image.uri ? { uri: image.uri } : null}
            style={{
              resizeMode: "contain",
              maxWidth: MAX_WIDTH,
              maxHeight: MAX_HEIGHT,
              flex: 1,
            }}
          />
        )}
      </View>
      <View style={styles.editOptions}>
        <Button title="Rotate" onPress={() => handleImageChange("rotate")} />
        <Button title="Resize" onPress={() => handleImageChange("resize")} />
        <Button title="Crop" onPress={() => handleImageChange("crop")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    width: "100%",
    height: "90%",
    backgroundColor: "gray",
    flexDirection: "column",
  },
  publishNav: { flex: 1, backgroundColor: "pink" },
  imageContainer: {
    flex: 5,
  },
  editOptions: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default EditScreen;

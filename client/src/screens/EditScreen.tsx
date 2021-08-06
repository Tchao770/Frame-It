import React, { useRef, useEffect } from "react";
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ImageProp } from "../types/data";
import { manipulateAsync } from "expo-image-manipulator";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

const EditScreen = ({ image, setImage }: ImageProp) => {
  const rotateImage = async () => {
    const adjustedImage = await manipulateAsync(image.uri, [{ rotate: 90 }]);
    setImage(adjustedImage);
  };

  const resizeImage = async () => {
    const adjustedImage = await manipulateAsync(image.uri, [
      { resize: { width: image.width, height: image.height } },
    ]);
    setImage(adjustedImage);
  };

  const cropImage = async () => {
    const adjustedImage = await manipulateAsync(image.uri, [
      {
        crop: {
          originX: 0,
          originY: 0,
          width: image.width - 100,
          height: image.height - 100,
        },
      },
    ]);
    setImage(adjustedImage);
  };

  return (
    <SafeAreaView style={styles.editContainer}>
      <View style={styles.publishNav}>
        <Text>Confirm</Text>
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
        <Button title="Rotate" onPress={rotateImage} />
        <Button title="Resize" onPress={resizeImage} />
        <Button title="Crop" onPress={cropImage} />
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
